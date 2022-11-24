const list_laureates = "SELECT * FROM LAUREATE;";
const list_laureate = "SELECT firstname,surname, PrizeWin FROM LAUREATS  WHERE id = $1 AND PrizeWin = (SELECT year FROM PRIZE INNER JOIN LAUREATS ON PRIZE.id_laureat = LAUREATS.id INNER JOIN INNER JOIN LAUREATS ON RECOIT.idLaureat = LAUREATS.id_laureat);";

module.exports = {
    list_laureates
}