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

async function uploadFileToCloudinary(file, folder,  height, quality=100){
    //as cloud interaction hai, hence making it an async function
    const options = {folder}    
    options.resource_type = "auto";

    if (quality) {
        options.quality = quality;
    }

    if(height){
        options.height = height;
    }

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
        const {name, tags, email} = req.body;
        console.log(name, tags, email)

        const file = req.files.videoFile;
        console.log(file)

        const supportedTypes = ["mp4", "mov"];
        const ext = file.name.split(".")[1].toLowerCase();


        //TO DO : Add an upper Limit of 5MB for Video, means video < 5MB will only be uploaded
        if(!isFileTypeSupported(ext, supportedTypes)){
            //means the siuation when the fileType is not supported
            return res.status(400).json({
                success : false,
                message : "File format not supported"
            })
        }

        if (file.size > (5*1024*1024)) {
            return res.status(400).json({
                success : false,
                message : "Please upload file less than 5 MB"
            })
        }

        //uploading the same file to Cloudinary

        const response = await uploadFileToCloudinary(file, "FileUpload_App")
        console.log(response)


        const fileData = await File.create({
            name, 
            tags,
            email,
            imageUrl : response.secure_url

        })

        res.json({
            success : true,
            videoUrl : response.secure_url,
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

exports.imageSizeReducer = async(req,res) => {
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
        //reducing file size


        //uploading the same file to Cloudinary
 
        const response = await uploadFileToCloudinary(file, "FileUpload_App",undefined, 90)
        //here we have sent the value of quality attribute also, which will decide the quality of image to 
        // be uploaded
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

exports.imageSizeReducer2 = async(req,res) => {
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
        //reducing file size


        //uploading the same file to Cloudinary
 
        const response = await uploadFileToCloudinary(file, "FileUpload_App", 800)
        //here we have sent the value of quality attribute also, which will decide the quality of image to 
        // be uploaded
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