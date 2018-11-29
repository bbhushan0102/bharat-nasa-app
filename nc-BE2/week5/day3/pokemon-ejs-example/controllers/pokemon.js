const db = require('../db');

exports.getAllPokemon = (req, res, next) => {
  db.many('SELECT * FROM pokemon JOIN types ON pokemon.type1 = types.pokemon_type_id ORDER BY pokemon_id ASC;')
    .then(allPokemon => {
      res.status(200).render('all-pokemon', { allPokemon })
      // res.send({ pokemon });
    })
    .catch(next);
};

exports.addPokemon = (req, res, next) => {
  const { pokemon_name, type1, image_url } = req.body
  db.one('INSERT INTO pokemon (pokemon_name, type1, image_url) VALUES ($/pokemon_name/, $/type1/, $/image_url/) RETURNING *;', { pokemon_name, type1, image_url })
    .then(pokemon => {
      res.status(201).send({ pokemon });
    })
    .catch(next);
};

exports.getPokemonById = (req, res, next) => {
  db.one('SELECT * FROM pokemon JOIN types ON pokemon.type1 = types.pokemon_type_id WHERE pokemon_id = $<pokemon_id>', req.params)
    .then(pokemon => {
      res.status(200).render('pokemon', { pokemon })
      // res.status(200).send({ pokemon });
    })
    .catch(next);
}