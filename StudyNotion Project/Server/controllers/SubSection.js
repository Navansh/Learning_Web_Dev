const SubSection = require('../models/SubSection');
const Section = require('../models/Section');
const Course = require('../models/Course');
const { uploadImageToCloudinary } = require('../utils/imageUploader');
require('dotenv').config();
//createSubSection
exports.createSubSection = async (req, res) => {
    try {
        //data fetch
        const {title, timeDuration, description, sectionId} = req.body;

        //extract video file from the request
        const video = req.files.videoFile;
        
        //data validation
        if(!title || !timeDuration || !description || !video || !sectionId){
            return res.status(400).json({
                success: false,
                message: 'Please fill all the fields',
            });
        }

        const uploadDetails = await uploadImageToCloudinary(video, process.env.FOLDER_NAME)

        videoUrl = uploadDetails.secure_url;


        //subSection create
        const newSubSection = await SubSection.create({
            title,
            timeDuration,
            description,
            videoUrl,
        });

        //update the section object with the subSection id and alsp populating the section and subsections
        const updatedSection = await Section.findByIdAndUpdate(
                {_id : sectionId},
                {
                    $push : {
                        subSections : newSubSection._id,
                    },
                },
                {new : true}
            ).populate({
                path : 'subSections',
            }).exec();

        //return the response       
        return res.status(200).json({
            success: true,
            message: 'SubSection created successfully',
            data: updatedSection,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });       
    }
}

//update SubSection
//delete SubSection