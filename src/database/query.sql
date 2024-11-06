CREATE DATABASE Prueba01;
USE Prueba01;

/*Creación de la tabla personas*/
CREATE TABLE personas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    age INT
);


/*consulta para obtener todos los campos de la tabla persona*/
SELECT * FROM personas;