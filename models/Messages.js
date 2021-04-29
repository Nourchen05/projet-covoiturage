const mongoose = require('mongoose')
const schema = mongoose.Schema

const messageSchema = new schema({
    sender: {
        type: schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    receiver: {
        type: schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    read: {
        type: Boolean, 
        default:false
    },
    createdAt: {
        type :Date,
        default :Date.now
    }
})

module.exports = mongoose.model("message", messageSchema)