const mongoose = require('mongoose')
const nodemailer = require('nodemailer');
require('dotenv').config()

const fileSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    imageUrl : {
        type : String,
    },
    tags : {
        type : String
    },
    email : {
        type : String
    }
})

//for pre or post middlewares to work, they should be defined before model creation
// i.e. mongoose.model("File", fileSchema)

//defining our post middleware 
fileSchema.post("save", async (doc) => {
    try {
        console.log(doc)

        //first we'll have to create our transporter
        //TO DO : Shift this configuration to config folder
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
})

const File = mongoose.model("File", fileSchema)
module.exports = File;