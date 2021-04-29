const express = require('express')
const router = express.Router()
const controller = require('../controllers/contactController')


router.post('/', controller.contacform)

module.exports = router 