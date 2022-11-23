const chalk = require('chalk');
const fileServices = require("../services/services");
const pool = require("../database/db")
const queries = require("../queries/insert.queries")
const parse = chalk.inverse.blue.bold.bgWhite("[Parse][JsonToDB]");

(async () => {
    const file = await fileServices.fileRead('../json/prize.json');
    let years = [];
    let categories = [];
    let laureates = [];

    for (const prize of file){
        if (await years.find(elt => elt === prize["year"])){/*Duplicate year found*/}
        else {
            years.push(prize.year);
            console.log(await pool.query(queries.insertYear, [parseInt(prize.year)]));
        }

        if (await categories.find(elt => elt === prize["category"])){/*Duplicate category found*/}
        else {
            categories.push(prize.category);
            console.log(await pool.query(queries.insertCategory, [prize.category]));
        }

        if (prize.laureates && prize.laureates.length > 0){
            for (const laureate of prize.laureates){
                const id = laureate.id; 
                const firstname = laureate.firstname; 
                const surname = laureate.surname;
                if (await laureates.find(elt => elt === id)){/*Duplicate laureate found*/}
                else {
                    laureates.push(laureate.id);
                    console.log(await pool.query(queries.insertLaureate, [id, firstname, surname]));
                }
                const year = prize.year;
                const category = prize.category;
                const motivation = laureate.motivation; 
                const share = laureate.share;
                console.log(await pool.query(queries.insertPrize, [motivation, share, year, category, id]));
            }
        }
    }  
    console.log(years);
    console.log(categories);
    console.log(laureates)
})();