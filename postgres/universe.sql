-- creacion de la base de datos
CREATE DATABASE universe;

-- cambio a la base de datos creada
\c universe;

-- TABLAS

CREATE TABLE galaxy(
  galaxy_id SERIAL PRIMARY KEY,
  name VARCHAR(70) NOT NULL UNIQUE,
  galaxy_types TEXT ,
  size INT, 
  distance_earth NUMERIC (1.2)
);

CREATE TABLE star(
  star_id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  type TEXT,
  constelation VARCHAR(50),
  galaxy_id INT  
);

CREATE TABLE planet(
  planet_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  planetet_type VARCHAR(30),
  satellites BOOLEAN,
  star_id INT,
);

CREATE TABLE moon( 
  moon_id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  planet_id INT 
);

-- Asignacion claves foraneas

ALTER TABLE star 
ADD FOREIGN KEY galaxy_id REFERENCES galaxy(galaxy_id);

ALTER TABLE planet
ADD FOREIGN KEY (star_id) REFERENCES star(star_id);

INSERT INTO galaxy (name, galaxy_types, )
INSERT INTO planet (name, satellites,)
