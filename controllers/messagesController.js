const messageModel = require('../models/Messages')

//@Methode : POST 
//@Desc : post a new message
//@Path : http://localhost:5000/api/message/s/:user_s/r/:user_r
//@Params : body, user_s , user_r
exports.postMessage =async(req, res)=> {
    try {
        const newMessage = new messageModel({...req.body,sender:req.params.user_s,receiver:req.params.user_r})
        const response = await newMessage.save()
        res.status(200).send({response:response , message : "message sent successfully"})
    } catch (error) {
        res.status(400).send({message:"can't send the message"})
        console.log(error)
    }
}

//@Methode : GET 
//@Desc : Get all messages from specific send and receiver
//@Path : http://localhost:5000/api/message/s/:user_s/r/:user_r
//@Params : body, user_s , user_r
exports.getMessages = async(req,res)=> {
    try {
        const response = await messageModel.find({$or : [{sender:req.params.user_s,receiver:req.params.user_r},
            {sender:req.params.user_r,receiver:req.params.user_s}]}).populate('receiver').populate('sender')
        res.status(200).send({response:response , message :"all messages are displayed"})
    } catch (error) {
        res.status(400).send({message:"can't display messages"})
        
    }
}