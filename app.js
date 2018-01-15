const express = require('express')
const morgan = require('morgan')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const app = express()
const snackRoutes = require('./src/routes/snacks');

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/snacks', snackRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found'} })
})

app.listen(port, () => console.log(`Listening on port: ${port}`))

module.exports = app
