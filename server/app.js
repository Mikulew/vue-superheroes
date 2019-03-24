const express = require('express')
const path = require('path')
//const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cors = require('cors')

const logger = require('./logger')
const config = require('./config')

// HTTP server configuration
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('port', config.port)

// Print every HTTP request in the console
app.use((req, res, next) => {
  logger.verbose(`Request ${req.method.toUpperCase()} ${req.url}`)
  next()
})

// Serve REST API routes
app.use('/api/search', require('./routes/search'))
app.use('/api/info', require('./routes/info'))

// Serve front-end
app.use(express.static(path.join(__dirname, '../dist')))

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

module.exports = app
