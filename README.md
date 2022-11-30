# S3-SQL-Project1
SQL project 1 on Nobel Prizes database in PostgreSQL and REST API in NodeJS
## *URL to use to get data :*
* F1: Lister tous les lauréats (id, prénom, nom).  
  * GET : http://localhost:3000/laureates/
* F2: Étant donné un identifiant, affichez les informations du lauréat avec cet identifiant (prénom, nom, les prix remportés). 
  * GET : http://localhost:3000/laureates?idLaureate=6
* F3: Combien ont remporté plus d'un prix Nobel ? 
  * GET : http://localhost:3000/prizes/more/one
* F4: Lister toutes les catégories des prix nobel 
  * GET : http://localhost:3000/categories
* F5: Déterminez quelle catégorie a produit le plus grand nombre de lauréats du prix Nobel. 
  * GET : http://localhost:3000/categories/prizes/most
* F6: Pour chaque année, indiquez combien de lauréats avaient remporté un prix nobel. 
  * GET : http://localhost:3000/years/winners
* F7: Afficher toutes les années au cours desquelles aucun prix Nobel n'a été décerné. 
  * GET : http://localhost:3000/years/prizes/empty
* F8: Afficher toutes les années de prix nobel triées par nombre de lauréats ascendant/descendant. 
  * GET : http://localhost:3000/years/prizes/asc_laureates
  * GET : http://localhost:3000/years/prizes/desc_laureates
* F9: Supprimer un lauréat avec un identifiant donné. 
  * DELETE : http://localhost:3000/laureates/?idLaureate=6
* F10: Mettre à jour la motivation d'un lauréat avec un identifiant donné dans une année donnée et une catégorie donnée.
  * PUT : http://localhost:3000/laureates/motivation
  * BODY(JSON) : {
  "idLaureate": 6,
  "year": 1911,
  "category": "chemistry",
  "motivation": "GOOD"
}
