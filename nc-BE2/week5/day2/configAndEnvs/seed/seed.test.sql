DROP DATABASE IF EXISTS best_films_test;
CREATE DATABASE best_films_test;

\c best_films_test;

CREATE TABLE films
(
  film_id SERIAL PRIMARY KEY,
  film_name VARCHAR(50) NOT NULL,
  stars INT,
  CHECK (stars > 0 AND stars < 6)
);

INSERT INTO films
  (film_name, stars)
VALUES
  ('Pulp Fiction', 5),
  ('Incredibles 2', 5);
