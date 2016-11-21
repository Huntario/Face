CREATE DATABASE facesDB;
USE facesDB;

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NULL,
  link VARCHAR(350) NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);
