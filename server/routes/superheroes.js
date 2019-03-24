const express = require('express')
const router = new express.Router()

const config = require('../config')

router.get('/', (req, res, next) => {
  // Return the config
  return res.json(config)
})

module.exports = router
