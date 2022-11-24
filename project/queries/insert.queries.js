const insertCategory = "INSERT INTO CATEGORY (libelle_category) VALUES($1)";
const insertLaureate = "INSERT INTO LAUREATE (id_laureate, firstname_laureate, surname_laureate) VALUES($1,$2,$3)";
const getIdCategory = "SELECT id_category FROM CATEGORY WHERE libelle_category = $1";
const insertPrize = "INSERT INTO PRIZE (year, id_category) VALUES($1,$2)";
const getIdPrize = "SELECT id_prize FROM PRIZE WHERE year = $1 and id_category = $2";
const insertRecoit = "INSERT INTO RECOIT (id_laureate, id_prize, motivation) VALUES($1,$2,$3)";

module.exports = {
    insertCategory,
    insertLaureate,
    getIdCategory,
    insertPrize,
    getIdPrize,
    insertRecoit
}