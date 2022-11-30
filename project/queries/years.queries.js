const getLaureatesYearWinners = "SELECT year, COUNT(Recoit.id_laureate) AS nbrPrixNobel\
                        FROM PRIZE\
                        LEFT JOIN RECOIT ON PRIZE.id_prize = RECOIT.id_prize\
                        GROUP BY year\
                        ORDER BY nbrPrixNobel DESC, year ASC;";
const getYearsPrizesEmpty = "SELECT year, COUNT(Recoit.id_laureate) AS nbrPrixNobel\
                        FROM PRIZE\
                        LEFT JOIN RECOIT ON PRIZE.id_prize = RECOIT.id_prize\
                        GROUP BY year\
                        HAVING COUNT(Recoit.id_laureate) = 0\
                        ORDER BY nbrPrixNobel DESC, year ASC;";
const getYearsPrizesSortDesc = "SELECT year, COUNT(id_laureate) AS nb_laureat\
                            FROM PRIZE\
                            INNER JOIN Recoit ON PRIZE.id_prize = Recoit.id_prize\
                            GROUP BY year\
                            ORDER BY nb_laureat DESC;"
const getYearsPrizesSortAsc = "SELECT year, COUNT(id_laureate) AS nb_laureat\
                            FROM PRIZE\
                            INNER JOIN Recoit ON PRIZE.id_prize = Recoit.id_prize\
                            GROUP BY year\
                            ORDER BY nb_laureat ASC;"

module.exports = {
    getLaureatesYearWinners,
    getYearsPrizesEmpty,
    getYearsPrizesSortDesc,
    getYearsPrizesSortAsc
}