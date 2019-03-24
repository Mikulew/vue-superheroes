const winston = require('winston')
const config = require('./config')

// { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }

/* Create new logger instance */
const logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      level: config.log.level,
      levels: winston.config.npm.levels,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
	})
  ]
})

module.exports = logger
