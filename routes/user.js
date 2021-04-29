const express = require('express')
const router = express.Router()
const multer = require('multer')
const isAuth = require("../middleware/passport")
const controller = require('../controllers/userController')

//import Multer for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,`${__dirname}/../client/public/images` )
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    },
})
const uploadStorage = multer({ storage: storage })

router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/current',isAuth(), controller.current)
router.put('/password/:user_id',controller.changePassword)
router.get('/:user_id',controller.getUser)
router.put('/:user_id',uploadStorage.single('picture'),controller.updateUser)

module.exports = router