const list_laureates = "SELECT id_laureate as id, firstname_laureate as prenom, surname_laureate as nom FROM LAUREATE ORDER BY id ASC;";
const list_laureate = "SELECT L.firstname_laureate AS prenom, L.surname_laureate AS nom, P.year AS annee, C.libelle_category AS categorie, \
                        R.motivation AS motivation \
                        FROM Recoit AS R \
                        INNER JOIN LAUREATE L on L.id_laureate = R.id_laureate \
                        INNER JOIN PRIZE P on P.id_prize = R.id_prize \
                        INNER JOIN CATEGORY C on C.id_category = P.id_category \
                        WHERE R.id_laureate = $1\
                        ORDER BY annee ASC, categorie ASC;";
const laureate = "SELECT * FROM LAUREATE WHERE id_laureate = $1;";                        
const deleteLaureates ="DELETE FROM LAUREATE WHERE id_laureate = $1;";
const selectMotivation = "SELECT Recoit.motivation\
                        FROM Recoit\
                        INNER JOIN PRIZE P on P.id_prize = Recoit.id_prize\
                        INNER JOIN LAUREATE L on L.id_laureate = Recoit.id_laureate\
                        INNER JOIN CATEGORY C on C.id_category = P.id_category\
                        WHERE L.id_laureate = $1 AND P.year = $2 AND C.libelle_category = $3;";
const selectPrize = "SELECT id_prize FROM PRIZE INNER JOIN CATEGORY C on C.id_category = PRIZE.id_category \
                        WHERE year = $1 AND libelle_category = $2 ;";
const updateMotivation = "UPDATE Recoit SET motivation = $1 WHERE id_laureate = $2 AND id_prize = $3;";


module.exports = {
    list_laureates,
    list_laureate,
    laureate,
    deleteLaureates,
    selectMotivation,
    selectPrize,
    updateMotivation
}