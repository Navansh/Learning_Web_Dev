const { request } = require('express');
const File = require('../models/File');
const { trace } = require('../routes/FileUpload');
const cloudinary = require('cloudinary').v2


//localFileUpload
exports.localFileUpload = async(req,res) => {
    try {
        const file = req.files.file;
        // .file isliye kyunki request bhejte samay hamne postman mein yahi key set kar rakhi hai
        console.log(file)

        //to get our extension for the file
        const ext = file.name.split(".")[1];
        // console.log(ext)

        let path = __dirname + "/files/" + Date.now() + `.${ext}`;
        console.log(path)
        //ye server ka path hai, yahaan par hum local path le rhe
        file.mv(path ,(err) => {
            // console.log(err)
        })
        //isse hamne ye jo file fetch ki hai usse move kardenge iss path par(server mein)

        res.json({
            success : true,
            message : "local file uploaded successfully"
        })

    } catch (error) {
        console.log(error)
    }
}

function isFileTypeSupported(fileType, supportedTypes){
    return supportedTypes.includes(fileType)
}

async function uploadFileToCloudinary(file, folder){
    //as cloud interaction hai, hence making it an async function
    const options = {folder}    
    return await cloudinary.uploader.upload(file.tempFilePath, options)

}

exports.imageUpload = async(req,res) => {
    try {
        //fetching the required data from the req's body
        const {name, tags, email} = req.body;
        console.log(name, tags, email)

        const file = req.files.imageFile;
        console.log(file)

        //Validation
        //here we check the type of image that is being uploaded and the type we support on our codebase
        //here we use just jpeg, jpg and png

        const supportedTypes = ["jpg", "jpeg", "png"];
        const ext = file.name.split(".")[1].toLowerCase();


        if(!isFileTypeSupported(ext, supportedTypes)){
            //means the siuation when the fileType is not supported
            return res.status(400).json({
                success : false,
                message : "File format not supported"
            })
        }

        console.log("extension check succeeded")

        //file format supported hai
        //uploading the same file to Cloudinary

        const response = await uploadFileToCloudinary(file, "FileUpload_App")
        console.log(response)

        //after uploading the file to Cloudinary, we save its entry in the DB
        //****Only Entry and not the actual file, in upload we may use a temp location to keep the file */
        //umtil it is uploaded to the server and then it is deleted from the DB

        const fileData = await File.create({
            name, 
            tags,
            email,
            imageUrl : response.secure_url

        })

        res.json({
            success : true,
            imageUrl : response.secure_url,
            message : "File Successfully Uploaded to Server"
        })

    } catch (error) {
        console.error(error)       
        res.status(400).json({
            success : false,
            message : "Something went Wrong"
        })
    }
}

exports.videoUpload = async(req,res) => {
    try {
        
    } catch (error) {
        res.status(400).json({
            success : false,
            message : "Something went Wrong"
        })
    }
}