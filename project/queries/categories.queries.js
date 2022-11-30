const getCategories = "SELECT libelle_category AS categories FROM CATEGORY;";
const categoriesPrizesMost = "SELECT libelle_category AS category, COUNT(LAUREATE.id_laureate) AS nbLaureats\
                            FROM CATEGORY\
                            INNER JOIN PRIZE ON CATEGORY.id_category = PRIZE.id_category\
                            INNER JOIN RECOIT ON PRIZE.id_prize = RECOIT.id_prize\
                            INNER JOIN LAUREATE ON RECOIT.id_laureate = LAUREATE.id_laureate\
                            GROUP BY libelle_category\
                            ORDER BY nbLaureats DESC\
                            LIMIT 1;";

module.exports = {
    getCategories,
    categoriesPrizesMost
}