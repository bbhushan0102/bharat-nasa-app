DROP DATABASE IF EXISTS pokemon;
CREATE DATABASE pokemon;

\c pokemon;

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
  ('Bulbasaur', 3, 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png'),
  ('Ivysaur', 3, 'https://cdn.bulbagarden.net/upload/7/73/002Ivysaur.png'),
  ('Venusaur', 3, 'https://cdn.bulbagarden.net/upload/a/ae/003Venusaur.png'),
  ('Charmander', 1, 'https://cdn.bulbagarden.net/upload/7/73/004Charmander.png'),
  ('Charmeleon', 1, 'https://cdn.bulbagarden.net/upload/4/4a/005Charmeleon.png'),
  ('Charizard', 1, 'https://cdn.bulbagarden.net/upload/7/7e/006Charizard.png'),
  ('Squirtle', 2, 'https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png'),
  ('Wartortle', 2, 'https://cdn.bulbagarden.net/upload/0/0c/008Wartortle.png'),
  ('Blastoise', 2, 'https://cdn.bulbagarden.net/upload/0/02/009Blastoise.png');
