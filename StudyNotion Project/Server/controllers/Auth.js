const User = require('../models/User');
const OTP = require('../models/OTP');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');
const Profile = require('../models/Profile');
const CourseProgress = require('../models/CourseProgress');
const Course = require('../models/Course');


//sendOTP
exports.sendOTP = async (req, res) => {
    try {
        //fetching email from the request body
        const {email} = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email address',
            });
        }

        //checking if the email is already registered or not
        const checkUserPresence = await User.findOne({email});

        //if the user exists, then we send error
        if(checkUserPresence){
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        //generate OTP
        var otp = otpGenerator.generate(6, {
            upperCase: false, specialChars: false, alphabets: false
        });

        console.log("OTP: ",otp);

        //making sure OTP that is generated is unique
        //so if the same OTP exists in the database, then we'll generate a new OTP
        //and we'll keep on generating new OTP until we get a unique OTP
        let result = await OTP.findOne({otp});
        //the difference between let and var is that let is block scoped and var is function scoped

        while(result){
            otp = otpGenerator.generate(6, {
                upperCase: false, specialChars: false, alphabets: false
            });
            result = await OTP.findOne({otp});
        }

        //this is not a very great way to generate OTPs as it requires a lot of Db calls
        //a better library to use which always a unique OTP is shortid

        //now as the OTP is generated, we'll save it in the database
        const otpPayload = {email, otp};
        const otpBody = await OTP.create(otpPayload);

        console.log("OTP Body: ",otpBody);

        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            data: otpBody,
            otp: otp,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

//signup
exports.signup = async (req, res) => {
    try {
        //fetching email, password and otp from the request body
        const {
            email,
            firstName,
            lastName,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            otp,
        } = req.body;
            
        //checking if the email and other data is valid or not
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[a-zA-Z]+$/;
        const contactNumberRegex = /^[0-9]{10}$/;

        //validating mandatory fields 
        if (!firstName || !lastName || !email || !password || !confirmPassword || !contactNumber || !otp) {
            return res.status(400).json({
                success: false,
                message: 'All fields are mandatory',
            });
        }
        
        //validating email
        if (!email || !emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email address',
            });
        }

        //validating name
        if (!firstName || !nameRegex.test(firstName)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid first name',
            });
        }

        if (!lastName || !nameRegex.test(lastName)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid last name',
            });
        }

        //validating contact number
        if (!contactNumber || !contactNumberRegex.test(contactNumber)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid contact number',
            });
        }

        //match the 2 given passwords
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match',
            });
        }

        //validate the password
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z]).{8,}$/;

        if (!passRegex.test(password)) {
            return res.status(400).json({
                success: false,
                message: 'Password must contain atleast 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character',
            });
        }

        //checking if the user already exists or not
        const existingUser = await User.findOne({email});

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists',
            });
        }
        
        //find the most recent OTP generated for the user
        const recentOTP = await OTP.findOne({email}).sort({createdAt: -1}).limit(1);
        //this returns the most recent OTP generated for the user with the specified email
        //createdAt : -1 means that we want the most recent OTP, as -1 means descending order
        //limit(1) means that we want only 1 OTP
        console.log(recentOTP);

        //checking if the OTP is valid or not
        if(recentOTP.length === 0){
            return res.status(400).json({
                success: false,
                message: "OTP not found",
            });
        } else if(recentOTP.otp !== otp){
            //as recentOTP is a document of model OTP, hence recentOTP.otp is the otp field of the document
            return res.status(400).json({
                success: false,
                message: "Invalid OTP",
            });
        }


        //if the OTP is valid, then we'll create a new user
        //and we'll hash the password before saving it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        //creating entry in Db
        //for that we first need to create the referencing model objects for the user
        //which are additonaldetails(Profile)
        //not creating for courses(Course) and courseProgress(CourseProgress) as they are not mandatory
        //for creating a user entry in DB

        //creating the additionalDetails object
        const profileDetails = await Profile.create({
            //as we want ObjectId, jo ki Db mein save karne par hi milegi
            //hence, just creating an Object will not work here
            gender : "",
            dateOfBirth : "",
            about : "",
            contactNumber : "",
        });

        console.log("Profile Details created successfully : ",profileDetails);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            accountType,
            contactNumber,
            additionalDetails : profileDetails._id,
            image : `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}%20${lastName}.svg`,
            //this image will be generated by the dicebear api, which will generate a random image based on the name
            //'s initials 
        });

        //and send the respective response
        return res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: user,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

//login
exports.login = async (req, res) => {
    try {
        //fetching email and password from the request body
        const {email, password} = req.body;
        
        //checking if the email and password is valid or not
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};



//changePassword and not forget password 