const resModel = require('../models/Reservation')
const roadModel = require('../models/Road')


//@Methode : POST 
//@Desc : Customer send a request for reservation to the driver
//@Path : http://localhost:5000/api/reservation
//@Params : body
exports.addreservation = async(req,res)=> {
    try {
        const newRes = new resModel({...req.body})
        const response= await newRes.save()
        res.status(200).send({response:response,message:"votre réservation a été envoyée avec succées"})
    } catch (error) {
        res.status(400).send({message:"votre reservation est réfusé"})
    }

}

//@Methode : GET 
//@Desc : Driver get all reservation where accepted is false
//@Path : http://localhost:5000/api/reservation/requests/:driver_id
//@Params : body, driver_id
exports.getReservationRequests = async(req,res)=> {
    try {
        const response= await resModel.find({ accepted :false,driver:req.params.driver_id}).populate('road').populate('customer')
        res.status(200).send({response:response,message:"Les demandes de réservation sont affichiées"})
    } catch (error) {
        res.status(400).send({message:"can't display"})
    }
}
//@Methode : GET 
//@Desc : Driver get all accepted reservation for specific road
//@Path : http://localhost:5000/api/reservation/requests/:driver_id
//@Params : body, driver_id, road_id
exports.getAcceptedReservation = async(req,res)=> {
    try {
        const response= await resModel.find({ accepted :true,driver:req.params.driver_id,road:req.params.road_id}).populate('customer')
        res.status(200).send({response:response,message:"Les demandes de réservation sont affichiées"})
    } catch (error) {
        res.status(400).send({message:"can't display"})
    }
}


//@Methode : PUT 
//@Desc : Driver accept a reservation (accepted set to true)
//@Path : http://localhost:5000/api/reservation/accept/:res_id
//@Params : body, res_id
exports.acceptReservationRequests = async(req,res)=> {
    try {
        const response= await resModel.updateOne({_id:req.params.res_id},{$set:{accepted:true}})
        if(response.nModified===0){
            return res.status(400).send({message:"la réservation a été déja accepté"})
        }
        res.status(200).send({response:response , message:'la reservation a été accepté'})
    } catch (error) {
        res.status(400).send({message:"la réservation a été éroné"})
    }
}


//@Methode : DELETE 
//@Desc : Driver reject a reservation 
//@Path : http://localhost:5000/api/reservation/refuse/:res_id
//@Params : body, res_id
exports.rejectReservationRequests = async(req,res)=> {
    try {
        const response= await resModel.deleteOne({_id:req.params.res_id})
        if(response.n===0){
            return res.status(400).send({message:'la réservation a été déja réfusé'})
        }
        res.status(200).send({response:response,message:'la reservation a été réfusé'})
    } catch (error) {
        res.status(400).send({message:'la rejection a été éroné'})
    }
}

//@Methode : GET 
//@Desc : Customer get all reservation 
//@Path : http://localhost:5000/api/reservation/requests/:driver_id
//@Params : body, customer_id
exports.getCustomerRequests = async(req,res)=> {
    try {
        const response= await resModel.find({customer:req.params.customer_id}).populate('road').populate('driver')
        res.status(200).send({response:response,message:"Les demandes de réservation sont affichiées"})
    } catch (error) {
        
    }
}

