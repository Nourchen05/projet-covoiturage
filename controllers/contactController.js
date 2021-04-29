const nodemailer = require("nodemailer")

exports.contacform = async (req, res) => {
        let data = req.body
        let smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            port: 465,
            auth: {
                user: "ecoweb1001@gmail.com",
                pass: "Joujou2020"
            }
        })

        let mailOptions = {
            from: data.email,
            to: 'ecoweb1001@gmail.com',
            subject: `Message from ${data.fullname}`,
            html: `
        <h3> Informations</h3>
        <ul>
            <li>Name : ${data.fullname}</li>
            <li>Email : ${data.email}</li>
            <li>Email : ${data.phone}</li>
            
        </ul>
        <h3>Message </h3>
        <p>${data.message}</p>
        `
        }
        smtpTransport.sendMail(mailOptions, (error, response) => {
            if (error) {
                res.status(400).send({message:"can't send your message"})
            } else {
                res.status(200).send({message:"message sent"})
            }
        })
        smtpTransport.close()
}