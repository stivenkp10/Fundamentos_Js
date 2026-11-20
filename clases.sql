CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE usuarios (
	-- atributo tipo_dato longitud_dato
	id_usuario	INT PRIMARY KEY auto_increment,
	nombre_usuario VARCHAR (20),
    apellidos_usuario VARCHAR (20),
    fecha_nacimiento_usuario DATE,
    email VARCHAR (100),
    clave VARCHAR (255)    
);
-- insertar un solo usuario 
INSERT INTO usuarios (nombre_usuario, apellidos_usuario, email, clave)
VALUES ("Leonardo", "D´caprio", "leonito@gmail.com", "D´caprio123");

-- insertar varios usuarios a la vez 
INSERT INTO usuarios (nombre_usuario, apellidos_usuario, email, clave)
VALUES 
("Margarita", "Piegrande", "elpiemasgrande@gmail.com", "margarita123"),
("Pepito", "Perez", "pepito@gmail.com", "pepito123"),
("Archivaldo", "Telesfoto", "architel@gmail.com", "Archi123"),
("Clara Emilia", "Bustamante Angarita", "ceba@gmail.com", "ceba123"),
("Stiven", "Guerrero", "stvvnkp@gmail.com", "stivenKP123");

select * from usuarios;