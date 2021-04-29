const express = require('express')
const router = express.Router()
const controller= require('../controllers/messagesController')

//post a new message 
router.post('/s/:user_s/r/:user_r',controller.postMessage)
//get all messages from specific send and receiver
router.get('/s/:user_s/r/:user_r',controller.getMessages)




module.exports = router