const devAPI = require('./server/dev')

module.exports = {
	devServer: {
		before: devAPI
	}
}
