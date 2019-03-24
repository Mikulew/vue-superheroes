const express = require('express')
const axios = require('axios')

const config = require('../config')

const router = new express.Router()

router.get('/:id', async (req, res, next) => {
	const path = `https://superheroapi.com/api/${config.accesstoken}/${req.params.id}`

	try {
		const response = await axios.get(path)
		return res.json(response.data)
	} catch (error) {
		return next(error)
	}

})

module.exports = router
