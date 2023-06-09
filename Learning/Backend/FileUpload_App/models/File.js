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
fileSchema.post("save",  (doc) => {

    const mailSender = require('../config/nodemailer');
    mailSender.sendMail(doc)
        .then(() => {
            //as this is an asynchronous function 
        })
        .catch((err) => {
        console.log(err);
    });

})

const File = mongoose.model("File", fileSchema)
module.exports = File;