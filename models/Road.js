const mongoose = require('mongoose')
const schema = mongoose.Schema

const roadSchema = new schema({
    user: {
        type:schema.Types.ObjectId, 
        ref:'user'
    },
    departure:{
        type:String, 
        required:true
    }, 
    arrive:{
        type:String , 
        required:true
    },  
    nbplace:{
        type:Number,
        required:true
    }, 
    date:{
        type:Date, 
        required:true
    },
    price:{
        type:String
    }, 
    smoke:Boolean,
})

module.exports = mongoose.model("road", roadSchema)