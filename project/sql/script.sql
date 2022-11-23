----- DROP TABLE -----
DROP TABLE IF EXISTS LAUREATE;
DROP TABLE IF EXISTS CATEGORY;
DROP TABLE IF EXISTS YEAR;

----- CREATE TABLE -----
CREATE TABLE IF NOT EXISTS YEAR(
   year DATE NOT NULL,
   CONSTRAINT pk_year PRIMARY KEY(year)
);

CREATE TABLE IF NOT EXISTS CATEGORY(
   category VARCHAR(1000) NOT NULL,
   CONSTRAINT pk_category PRIMARY KEY(category)
);

CREATE TABLE IF NOT EXISTS LAUREATE(
   id_laureate SERIAL NOT NULL,
   firstname_laureate VARCHAR(1000),
   surname_laureate VARCHAR(1000),
   motivation_laureate VARCHAR(8000),
   share_laureate INT,
   category VARCHAR(1000) NOT NULL,
   year DATE NOT NULL,
   CONSTRAINT pk_id_laureate PRIMARY KEY(id_laureate),
   CONSTRAINT fk_laureate_category FOREIGN KEY(category) REFERENCES CATEGORY(category),
   CONSTRAINT fk_laureate_year FOREIGN KEY(year) REFERENCES YEAR(year)
);
