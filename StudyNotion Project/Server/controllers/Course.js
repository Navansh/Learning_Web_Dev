const Course = require('../models/Course');
const Tag = require('../models/Tag');
const CourseProgress = require('../models/CourseProgress');
const Section = require('../models/Section');
const User = require('../models/User');
const uploadImageToCloudinary = require('../utils/uploadImageToCloudinary');

//createCourse
exports.createCourse = async (req, res) => {
    try {
        //user state currently -> He is logged in 
        //checks -> if he is an instructor
        const {courseName, courseDescription, whatYouWillLearn, price, tag, language, category} = req.body;

        //get thumbnail
        const thumbnail = req.files.thumbnail;

        //validation
        if (!courseName || !courseDescription || !whatYouWillLearn || !price || !tag || !language || !thumbnail) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        //check for instructor
        //why we need to check for instructor ? -> because we need to store its ObjectId in the course document
        const userID = req.user.id;
        //using this ID, we find instructor in the DB
        if(!userID){
            return res.status(400).json({
                success: false,
                message: 'User ID not found',
            });
        }

        const instructorDetails = await User.findById(userID);
        console.log(instructorDetails);

        //why calling this ? when we have user.id
        if (!instructorDetails) {
            return res.status(400).json({
                success: false,
                message: 'Instructor not found',
            });
        }



        //check for a valid tag, Why ? as frontend mein toh dropdown hoga
        //as when we'll test this API using Postman, we'll send tag and then this will be required

        const tagDetails = await Tag.findById(tag);
        //as jo tag body mein se receive kar rhe honge, usmein tag ka id hogi as according to Course model
        //as woh ID ki tarah hi stored hoga

        if (!tagDetails) {
            return res.status(400).json({
                success: false,
                message: 'Tag not found',
            });
        }

        //upload image to cloudinary
        const thumbnailDetails = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME); 
        //tempFilePath is the path where the image is stored temporarily

        //create an entry for new course in the DB
        const courseDetails = await Course.create({
            courseName,
            courseDescription,
            instructor : instructorDetails._id,
            whatYouWillLearn,
            price,
            tag : tagDetails._id,
            language,
            thumbnail : thumbnailDetails.secure_url,
        });

        console.log(courseDetails);

        //update the instructor object with the course id
        //hence effectively pushing the created Course in the instrucotr's courses list
        await User.findbyIdAndUpdate({_id : instructorDetails._id}, 
            {
                $push : {
                    courses : courseDetails._id,
                },
            },
            {new : true},
        );


        //update the tag object with the course id
        tagDetails.course.push(courseDetails._id);
        await tagDetails.save();
        
        return res.status(200).json({
            success: true,
            message: 'Course created successfully',
            data: courseDetails,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });    
    }
};


//getAllCourses
exports.getAllCourses = async (req, res) => {
    try {
        const allCourses = await Course.find({}, 
            {
                courseName : true,
                courseDescription : true,
                price : true,
                thumbnail : true,
                instructor : true,
                ratingAndReviews : true,
                studentsEnrolled : true,
            }).populate('instructor').exec();

        return res.status(200).json({
            success: true,
            message: 'All courses fetched successfully',
            data: allCourses,
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });

    }
};
