const express = require('express')
const router = express.Router()
const controller = require('../controllers/roadController')



//get a road by its user 
router.get('/user/:user_id',controller.getRoads)
//get road by search with departure and destination
router.get('/:user_id/search', controller.searchRoad)
//add a new road
router.post('/:user_id',controller.addRoad)
//update road info
router.put('/:road_id',controller.updateRoad)
//get road by id
router.get('/:road_id',controller.getRoad)


module.exports = router