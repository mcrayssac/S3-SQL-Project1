const chalk = require('chalk');
const fileServices = require("../services/services");
const pool = require("../database/db")
const queries = require("../queries/insert.queries")
const parse = chalk.inverse.blue.bold.bgWhite("[Parse][JsonToDB]");

(async () => {
    const file = await fileServices.fileRead('../json/prize.json');
    let categories = [];
    let laureates = [];

    for (let prize of file){
        if (await categories.find(elt => elt === prize.category)){/*Duplicate category found*/}
        else {
            categories.push(prize.category);
            console.log(await pool.query(queries.insertCategory, [prize.category]));
        }

        if (prize.laureates && prize.laureates.length > 0){
            for (let laureate of prize.laureates){
                const id = laureate.id; 
                const firstname = laureate.firstname; 
                const surname = laureate.surname;
                if (await laureates.find(elt => elt === id)){/*Duplicate laureate found*/}
                else {
                    laureates.push(laureate.id);
                    console.log(await pool.query(queries.insertLaureate, [id, firstname, surname]));
                }

                const category = await pool.query(queries.getIdCategory, [prize.category])
                const id_category = category.rows[0].id_category;
                const year = prize.year;
                console.log(await pool.query(queries.insertPrize, [year, id_category]));
                
                const row_prize = await pool.query(queries.getIdPrize, [parseInt(year), id_category])
                const id_prize = row_prize.rows[0].id_prize;
                const motivation = laureate.motivation; 
                console.log(await pool.query(queries.insertRecoit, [id, id_prize, motivation]));
            }
        } else {
            const category = await pool.query(queries.getIdCategory, [prize.category])
            const id_category = category.rows[0].id_category;
            const year = prize.year;
            console.log(await pool.query(queries.insertPrize, [year, id_category]));
        }
    }  
    console.log(categories);
    console.log(laureates);
})();