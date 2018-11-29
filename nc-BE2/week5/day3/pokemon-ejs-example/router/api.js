const router = require('express').Router();
const { getAllPokemon, addPokemon, getPokemonById } = require('../controllers/pokemon');

router.route('/pokemon')
  .get(getAllPokemon)
  .post(addPokemon);

router.route('/pokemon/:pokemon_id')
  .get(getPokemonById);

module.exports = router;
