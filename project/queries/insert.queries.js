const insertYear = "INSERT INTO YEAR (year) VALUES($1)";
const insertCategory = "INSERT INTO CATEGORY (category) VALUES($1)";
const insertLaureate = "INSERT INTO LAUREATE (id_laureate, firstname_laureate, surname_laureate) VALUES($1,$2,$3)";
const insertPrize = "INSERT INTO PRIZE (motivation_prize, share_prize, year, category, id_laureate) VALUES($1,$2,$3,$4,$5)";

module.exports = {
    insertYear,
    insertCategory,
    insertLaureate,
    insertPrize
}