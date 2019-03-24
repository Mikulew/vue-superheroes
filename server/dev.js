const bodyParser = require('body-parser')

module.exports = app => {
	app.use(bodyParser.json())
	app.use('/api/search', require('./routes/search'))
	app.use('/api/info', require('./routes/info'))
}
