const chalk = require('chalk');
const fileServices = require("../services/services");
const parse = chalk.inverse.blue.bold.bgWhite("[Parse][JsonToDB]");

const separe = (callback) => {
    const file = fileServices.fileRead();
    let results = [];
    let laureates = [];
    let years = [];
    let categories = [];

    if (file.length > 0){
        file.forEach(element => {
            //console.log(element);

            if (years.find(elt => elt === element["year"])){/*Duplicate year found*/}
            else years.push(element.year);

            if (categories.find(elt => elt === element["category"])){/*Duplicate category found*/}
            else categories.push(element.category);

            if (element.laureates && element.laureates.length > 0){
                element["laureates"].forEach(element2 => {
                    if (laureates.find(elt => elt.id === element2["id"])){/*Duplicate laureate found*/}
                    else {
                        laureates.push({id: element2["id"], firstname: element2["firstname"], surname: element2["surname"]
                        , motivation: element2["motivation"], share: element2["share"]});
                    }
                })
            }
        });
    }

    if (laureates.length > 0 && years.length > 0 && categories.length > 0) {
        console.log(years);
        console.log(categories);
        laureates.sort((a, b) => b.id - a.id);
        years.sort((a, b) => parseInt(b) - parseInt(a));
        let laureates = [];
        return callback(null,  laureates);
    } else {
        return callback([]);
    }
}

/**
 * Use to parse JSON to a database PostgreSQL
 * @returns {*[]|any} JSON of file if results, else empty array
 */
const jsonToDB = (callback) => {
    const jsonSepared = separe((error, results) => {
        if (error) return error;
        else return results;
    });
    return callback(null, jsonSepared);
}

module.exports = {
    jsonToDB : jsonToDB
}