//app creation
const express = require('express')
const app =express();
require('dotenv').config()


//PORT find out karna hai
const PORT = process.env.PORT || 4000

//adding middlewares
app.use(express.json())
//and as express doesn't have a native support for fileHandling, so we use an external middleware for that 
const fileUpload = require('express-fileupload')
app.use(fileUpload());
//this is different from Cloudinary FileUpload, as that uploads to server(its own) and 
//this express-fileUpload uploads to our mongoDB 

//connecting with DB
const db = require('./config/database')
db.connectDb();

//connecting with the cloud
const cloudinary = require('./config/cloudinary')
cloudinary.cloudinaryConnect();

//api Routing 
const Upload = require('./routes/FileUpload')
app.use('/api/v1/upload', Upload)

//activate the DB
app.listen(PORT, () => {
    console.log(`App is running at {PORT}`)
    
})










