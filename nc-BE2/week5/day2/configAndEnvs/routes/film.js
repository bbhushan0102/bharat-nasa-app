const filmRouter = require('express').Router()
const { sendAllFilms, sendFilmById } = require('../controllers/film')

filmRouter.get('/', sendAllFilms)
filmRouter.get('/:filmId', sendFilmById)

module.exports = filmRouter