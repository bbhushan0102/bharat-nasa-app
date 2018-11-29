DROP DATABASE IF EXISTS pokemon_test;
CREATE DATABASE pokemon_test;

\c pokemon_test;

CREATE TABLE types
(
  pokemon_type_id SERIAL PRIMARY KEY,
  pokemon_type VARCHAR(100)
);

CREATE TABLE pokemon
(
  pokemon_id SERIAL PRIMARY KEY,
  pokemon_name VARCHAR(100) NOT NULL,
  type1 INT,
  image_url VARCHAR(100),
  FOREIGN KEY (type1) REFERENCES types(pokemon_type_id)
);

INSERT INTO types
  (pokemon_type)
VALUES
  ('Fire'),
  ('Water'),
  ('Grass');

INSERT INTO pokemon
  (pokemon_name, type1, image_url)
VALUES
  ('Test Pokemon 1', 1, 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png'),
  ('Test Pokemon 2', 2, 'https://cdn.bulbagarden.net/upload/7/73/002Ivysaur.png'),
  ('Test Pokemon 3', 3, 'https://cdn.bulbagarden.net/upload/a/ae/003Venusaur.png');