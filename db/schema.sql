DROP DATABASE IF EXISTS hamburgers_db;
CREATE  DATABASE  hamburgers_db;

USE hamburgers_db;

CREATE TABLE burgers(
id  INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN default false,
PRIMARY KEY(id)
);