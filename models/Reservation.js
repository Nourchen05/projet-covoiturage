const mongoose = require('mongoose')
const schema = mongoose.Schema

const reservationSchema = new schema({
    customer: {
        type:schema.Types.ObjectId, 
        ref:'user'
    },
    driver:{
        type:schema.Types.ObjectId,
        ref:'user'
    },
    road :{
        type:schema.Types.ObjectId,
        ref:'road'
    },
    accepted : {
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("reservation", reservationSchema)