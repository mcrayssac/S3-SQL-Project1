SET client_encoding = 'UTF8';

----- DROP TABLE -----
DROP TABLE IF EXISTS Recoit;
DROP TABLE IF EXISTS PRIZE;
DROP TABLE IF EXISTS LAUREATE;
DROP TABLE IF EXISTS CATEGORY;

----- CREATE TABLE -----
CREATE TABLE IF NOT EXISTS CATEGORY(
   id_category SERIAL,
   libelle_category VARCHAR(1000) NOT NULL,
   CONSTRAINT pk_category PRIMARY KEY(id_category)
);

CREATE TABLE IF NOT EXISTS LAUREATE(
   id_laureate INT,
   firstname_laureate TEXT,
   surname_laureate TEXT,
   CONSTRAINT pk_id_laureate PRIMARY KEY(id_laureate)
);

CREATE TABLE PRIZE(
   id_prize SERIAL,
   year DECIMAL(4,0) NOT NULL,
   id_category INT NOT NULL,
   CONSTRAINT pk_id_prize PRIMARY KEY(id_prize),
   CONSTRAINT fk_prize_category FOREIGN KEY(id_category) REFERENCES CATEGORY(id_category)
);

CREATE TABLE Recoit(
   id_laureate INT,
   id_prize INT,
   motivation VARCHAR(8000),
   CONSTRAINT pk_recoit_id_laureate_id_prize PRIMARY KEY(id_laureate, id_prize),
   CONSTRAINT fk_recoit_id_laureate FOREIGN KEY(id_laureate) REFERENCES LAUREATE(id_laureate),
   CONSTRAINT fk_recoit_id_prize FOREIGN KEY(id_prize) REFERENCES PRIZE(id_prize)
);
