const express = require('express')
const router = express.Router()
const controller = require('../controllers/reservationController')

router.post('/',controller.addreservation)
router.get('/requests/:driver_id',controller.getReservationRequests)
router.get('/accepted/:driver_id/:road_id',controller.getAcceptedReservation)
router.put('/accept/:res_id',controller.acceptReservationRequests)
//Driver decline a request or customer cancel a request/reservation
router.delete('/refuse/:res_id',controller.rejectReservationRequests)
//get customer requests
router.get('/customer/:customer_id',controller.getCustomerRequests)


module.exports = router