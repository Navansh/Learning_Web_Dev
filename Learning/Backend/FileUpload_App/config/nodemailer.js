const nodemailer = require('nodemailer');
require('dotenv').config()

exports.sendMail = async (doc) => {
    // console.log(email)
    try {
        let transporter = nodemailer.createTransport({
            host : process.env.MAIL_HOST,
            auth : {
                user : process.env.MAIL_USER,
                pass : process.env.MAIL_PASS
            }
        })
    
        //sending mail
        let info = await transporter.sendMail({
            from : `Dennis`,
            to : doc.email,
            subject : `New File Uploaded on Cloudinary`,
            html : `<h2>Hello betaa</h2> <p>New File uploaded beta Link : ${doc.imageUrl} </p>`
        })
    
        console.log(info)
    } catch (error) {
        console.error(error)
    }
    


}