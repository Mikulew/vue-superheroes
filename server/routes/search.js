const express = require('express')
const axios = require('axios')

const config = require('../config')

const router = new express.Router()

router.get('/', (req, res, next) => {
	return res.json({
		error: {
			code: 500,
			message: 'Empty requests are not allowed'
		}
	})
})


router.get('/:name', async (req, res, next) => {
	if(req.params.name.length < 2) {
		return res.json({
			error: {
				code: 500,
				message: 'Provide minimum two letters'
			}
		})
	} else {
		const path = `https://superheroapi.com/api/${config.accesstoken}/search/${req.params.name}`

		try {
			const response = await axios.get(path)
			return res.json(response.data)
		} catch (error) {
			return next(error)
		}
	}
})

module.exports = router
