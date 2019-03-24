const http = require('http')

const config = require('./config')
const logger = require('./logger')
const app = require('./app')

logger.info('Starting application...')

// Start the server
const server = http.Server(app)

server.listen(config.port, () => {
	logger.info(`Express server listening on port ${server.address().port}`)
})
