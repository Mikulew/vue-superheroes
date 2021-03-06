const express = require('express')
const axios = require('axios')

const router = new express.Router()

router.get('/:name', async (req, res, next) => {
	const path = `https://superheroapi.com/api/${config.accesstoken}/search/${req.params.name}`

	try {
		const response = await axios.get(path)
		return res.json(response.data)
	} catch (error) {
		return next(error)
	}
})

module.exports = router
