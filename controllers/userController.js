const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//@Method : POST 
//@Desc : Register  user 
//@Path : http://localhost:5000/api/user/register
//@params : body
exports.register = async (req, res) => {
    const { firstname,lastname,gender,email,password,role } = req.body
    try {
        const newUser = new userModel({ firstname,lastname,gender,email,password,role })
        //CECHK IF THE EMAIL ALREADY EXISTS 
        const searchEmail = await userModel.findOne({ email })
        if (searchEmail) {
            return res.status(400).send({ message: "l'email existe déja" })
        }
        //HASH PASSWORD
        const salt = 10;
        const hashedpasword = await bcrypt.hash(password, salt)
        newUser.password = hashedpasword
        // save the user 
        const response = await newUser.save()
        //CREATE A TOKEN
        const payload = {
            _id: response._id,
        }
        const token = jwt.sign(payload, process.env.Secret)
        res.status(200).send({ user: response, message: "vous êtes inscrit", token: `Bearer ${token}` })

    } catch (error) {
        res.status(400).send({ message: "Can't not save the user" })
    
    }
}

//@Method : POST 
//@Desc : login  user 
//@Path : http://localhost:5000/api/register
//@params : body
exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        //find if the user exists
        const seachedUser = await userModel.findOne({ email })
        //if the user_name not exists
        if (!seachedUser) {
            return res.status(400).send({ message: "Bad Credential" })
        }
        //password are equals 
        const match = await bcrypt.compare(password, seachedUser.password)
        if (!match) {
            return res.status(400).send({ message: "Bad Credential" })
        }
        //CREATE A TOKEN
        const payload = {
            _id: seachedUser._id,
        }
        const token = jwt.sign(payload, process.env.Secret)
        //send the user 
        res.status(200).send({ user: seachedUser, message: " succès", token: `Bearer ${token}` })
    } catch (error) {
        res.status(400).send({ message: "can't get the user" })
        
    }
}

//@Method : GET 
//@Desc : get  current
//@Path : http://localhost:5000/api/user/current
//@params : body
exports.current = async(req, res) => {
    res.status(200).send({user:req.user})
}

//@Method : GET
//@Desc : Get user by id  
//@Path : http://localhost:5000/api/user/:user_id
//@params : body , user_id
exports.getUser = async(req,res) => {
    try {
        const response = await userModel.findById({_id:req.params.user_id}).populate('road')
        res.status(200).send({response:response , message:"displayed successfully"})
    } catch (error) {
        res.status(400).send({message:"can't be displayed"})
    }
}

//@Methode : PUT
//@desc : update a user by id
//@Path :http://localhost:5000/api/user/:user_id
//@params : id , body 
exports.updateUser = async (req, res) => {
    try {
        if (req.file) {
            const response = await userModel.updateOne({ _id: req.params.user_id },
                { $set: { ...req.body, picture: req.file.filename } })
            if (response.nModified == 0) {
                res.status(400).send({ message: "the user is already updated" })
                return
            }
            res.status(200).send({ response: response, message: "the user is updated" })
        } else {
            const response = await userModel.updateOne({ _id: req.params.user_id },
                { $set: { ...req.body} })
            if (response.nModified == 0) {
                res.status(400).send({ message: "the user is already updated" })
                return
            }
            res.status(200).send({ response: response, message: "the user is updated" })
        }
    } catch (error) {
        res.status(400).send({ message: "can't update this user" })
        console.log(error)
    }
}



//@Method: Put 
//@Desc : change password
//@Path : http://localhost:5000/api/user/password/:user_id
//@Params : body , user_id
exports.changePassword = async (req, res) => {
    const { password, newpassword } = req.body
    try {
        const user = await userModel.findOne({ _id: req.params.user_id })
        //check if the old password is correct
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            return res.status(400).send({ message: "password is incorrect" })
        }
        //HASH NEW PASSWORD
        const salt = 10;
        const newpwd = await bcrypt.hash(newpassword, salt)
        const response = await userModel.updateOne({ _id: req.params.user_id }, { $set: { ...req.body, password: newpwd, newpassword: "" } })
        res.status(200).send({ response: response, message: "password is changed" })
    } catch (error) {
        res.status(400).send({ message: "can't change the password" })
        console.log(error)
    }
}