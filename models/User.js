const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    bio:{
        type:String
    },
    gender: {
        type: String,
        required: true, 
        default:"Inconnu", 
        enum :["Inconnu", "Homme" ,"Femme"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    newpassword:String,
    picture: String,
    role: {
        type: String,
        default:'utilisateur', 
        enum:['admin','utilisateur']
    }, 
    profil:{
        type:schema.Types.ObjectId,
        ref:'profil'
    },
    road:[ {
        type:schema.Types.ObjectId, 
        ref:'road'
    }]

})

module.exports = mongoose.model("user", userSchema)