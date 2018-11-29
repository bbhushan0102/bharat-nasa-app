const db = require('../db')

exports.sendAllFilms = (req, res, next) => {
  db.many('SELECT * FROM films;')
    .then(films => res.send({ films }))
    .catch(next)
}

exports.sendFilmById = (req, res, next) => {
  db.one('SELECT * FROM films WHERE film_id = $<filmId>;', req.params)
    .then(film => res.send({ film }))
    .catch(next)
}