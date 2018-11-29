DROP DATABASE IF EXISTS best_films;
CREATE DATABASE best_films;

\c best_films;

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
  ('Incredibles 2', 5),
  ('Moanna', 5),
  ('The Lion King', 5),
  ('Space Mutiny', 1);
