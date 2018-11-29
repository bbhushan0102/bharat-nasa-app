const app = require('express')()
const apiRouter = require('./routes/api')

app.use('/api', apiRouter)

app.use('/*', (req, res, next) => {
  next({ status: 404 })
})

app.use((err, req, res, next) => {
  if (err.status === 404 || err.code === 0) res.status(404).send({ msg: 'Page not found' })
  else next(err)
})

app.use((err, req, res, next) => {
  res.status(500).send({ msg: 'Internal Server Error' })
})

module.exports = app