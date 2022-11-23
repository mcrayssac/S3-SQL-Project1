const fs = require('fs');
const chalk = require('chalk');
const services = chalk.inverse.blue.bold.bgWhite("[Services][services]");


/**
 * Use to read JSON from a file
 * @returns {*[]|any} JSON of file if results, else empty array
 */
const fileRead = (file) => {
    try {
        let data;
        if (file) data = file
        else data = './json/prize.json'
        const dataBuffer = fs.readFileSync(data)
        const dataJSON = dataBuffer.toString()
        console.log(chalk.blue(`${services} Notes has being read !`));
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


/**
 * Use to save JSON to a file
 * @param notes JSON to save
 */
const fileSave = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(file, dataJSON)
    console.log(chalk.blue(`${services} Notes has being saved !`));
};

module.exports = {
    fileRead : fileRead,
    fileSave : fileSave
}