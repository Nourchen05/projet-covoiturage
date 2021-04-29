const mongoose = require('mongoose')
const schema = mongoose.Schema

const profilSchema = new schema({
    smoker:Boolean, 
    animal:Boolean,
    adress1:String,  
    city:String, 
    car:String, 
    carmodel:String, 
    places:String, 
})

module.exports = mongoose.model("profil", profilSchema)