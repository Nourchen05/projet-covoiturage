const roadModel = require('../models/Road')
const userModel = require('../models/User')

//@Methode : POST 
//@Desc : Add a new road drive
//@Path : http://localhost:5000/api/road/
//@Params : body, user_id
exports.addRoad = async (req, res) => {
    try {
        const newRoad = new roadModel({ ...req.body,user:req.params.user_id })
        const response = await newRoad.save()
        //assign the published road to its user
        await userModel.findByIdAndUpdate({ _id: req.params.user_id },
            { $push: { road: response._id } },
            { new: true, useFindAndModify: false })
        res.status(200).send({ response: response, message: 'added successfully' })
    } catch (error) {
        res.status(200).send({ message: "can't be added" })
    }
}
//@Methode : GET 
//@Desc : Get a road by id
//@Path : http://localhost:5000/api/road/:road_id
//@Params : body, road_id
exports.getRoad = async(req,res) => {
    try {
        const response = await roadModel.findById({_id:req.params.road_id}).populate('user')
        res.status(200).send({response:response,message:'displayed successfully'})
    } catch (error) {
        res.status(400).send({message:"can't be displayed"})
    }
}

//@Methode : GET 
//@Desc : Search road by departure and destination and date and number of passenger
//@Path : http://localhost:5000/api/road
//@Params : req.query.departure , req.query.arrive
exports.searchRoad = async(req,res)=> {
    const {departure, arrive ,places, date}= req.query
    try {
        const response = await roadModel.find({$and:[{user:{$ne:req.params.user_id}},{departure:departure},{arrive:arrive},
            {nbplace:{$gte:places}},{date:{$eq:date}}]}).populate('user')
        res.status(200).send({response:response , message:"search displayed"})
    } catch (error) {
        res.status(400).send({message:"can't display"})
    }
}

//@Methode : PUT 
//@Desc : Update Road
//@Path : http://localhost:5000/api/road/:road_id
//@Params : body, road_id
exports.updateRoad = async (req, res) => {
    try {
        const response = await roadModel.updateOne({ _id: req.params.road_id }, { $set: { ...req.body } })
        if (response.nModified === 0) {
            return res.status(400).send({ message: "Already updated" })
        } res.status(400).send({ response: response, message: "updated successfully" })
    } catch (error) {
        res.status(400).send({ message: "can't update" })
    }
}

//@Methode : GET 
//@Desc : get all road by specific driver
//@Path : http://localhost:5000/api/road/user/:user_id
//@Params : user_id
exports.getRoads= async(req,res)=> {
    try {
        const response = await roadModel.find({user:req.params.user_id}).populate('user')
        res.status(200).send({response:response,message:"all road are displayed"})
    } catch (error) {
        res.status(400).send({message:"can't display roads"})
    }
}