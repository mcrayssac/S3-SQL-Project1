----- DROP TABLE -----
DROP TABLE IF EXISTS PRIZE;
DROP TABLE IF EXISTS LAUREATE;
DROP TABLE IF EXISTS CATEGORY;
DROP TABLE IF EXISTS YEAR;

----- CREATE TABLE -----
CREATE TABLE IF NOT EXISTS YEAR(
   year DECIMAL(4,0) NOT NULL,
   CONSTRAINT pk_year PRIMARY KEY(year)
);

CREATE TABLE IF NOT EXISTS CATEGORY(
   category VARCHAR(1000) NOT NULL,
   CONSTRAINT pk_category PRIMARY KEY(category)
);

CREATE TABLE IF NOT EXISTS LAUREATE(
   id_laureate INT,
   firstname_laureate VARCHAR(1000),
   surname_laureate VARCHAR(1000),
   CONSTRAINT pk_id_laureate PRIMARY KEY(id_laureate)
);

CREATE TABLE IF NOT EXISTS PRIZE(
   id_prize SERIAL,
   motivation_prize VARCHAR(8000),
   share_prize INT,
   year DECIMAL(4,0) NOT NULL,
   category VARCHAR(1000) NOT NULL,
   id_laureate INT NOT NULL,
   CONSTRAINT pk_id_prize PRIMARY KEY(id_prize),
   CONSTRAINT fk_prize_year FOREIGN KEY(year) REFERENCES YEAR(year),
   CONSTRAINT fk_prize_category FOREIGN KEY(category) REFERENCES CATEGORY(category),
   CONSTRAINT fk_prize_id_laureate FOREIGN KEY(id_laureate) REFERENCES LAUREATE(id_laureate)
);