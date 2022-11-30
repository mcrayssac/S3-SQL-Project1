const moreOnePrize = "SELECT L.firstname_laureate AS prenom, L.surname_laureate AS nom, COUNT(P.id_prize) AS nbPrix\
                    FROM Recoit AS R\
                    INNER JOIN LAUREATE L on L.id_laureate = R.id_laureate\
                    INNER JOIN PRIZE P on P.id_prize = R.id_prize\
                    INNER JOIN CATEGORY C on C.id_category = P.id_category\
                    GROUP BY L.firstname_laureate, L.surname_laureate\
                    HAVING COUNT(P.id_prize) > 1\
                    ORDER BY nbPrix DESC, prenom ASC, nom ASC;";

module.exports = {
    moreOnePrize
}