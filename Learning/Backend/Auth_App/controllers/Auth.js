const bcrypt = require('bcrypt')
const User = require("../models/User")

//signup route handler
exports.signup = async(req,res) => {
    try {
        //here we are not validating email, but that is also a step to be considered when using this stuff
        //actually : Add to To Do

        //as this is a post call, so first we fetch the required data
        const { name, email, password, role } = req.body;

        //check if user already exists
        //Db interaction
        const existingUser = await User.findOne({email});
        //checking if there is an entry in the database with this email,
        //if it gets any entry it returns the first one amongst them
        if(existingUser){
            return res.status(400).json({
                success : false, 
                message : "User already exists"
            });
        }

        //if this isn't true, then start the process for new User Registration
        //secure Password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10)
            //apply retry startegy here, that makes you try for this process 3 Times and then throws the error
        } catch (error) {
            return res.status(500).json({
                success : false,
                message : "Error in Hashing Password"
            })
        }

        //now create the user
        const user = await User.create({
            name, email, password : hashedPassword, role
        })

        return res.status(200).json({
            success : true,
            message : "User Created Successfully"
        })
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success : false,
            message : "User Cannot be registered, Please try again"
        })
    }
}

exports.login = async(req,res) =>{
    try {
        //fetching the data
        const {email, password} = req.body;

        //1st valiadation : 
        if(!email || !password){
            return res.status(400).json({
                success : false,
                message : "Please fill all the required details"
            })
        }

        //now checking if the given User has already Signed Up or not 

        const user = await User.findOne({email});
        //if not registered 

        if (!user) {
            return res.status(401).json({
                success : false,
                message : "Please Signup First"
            })
        }

        //verify password and generate a JWT Token
        if (await bcrypt.compare(password, user.password)) {
            //passwords matched,
            
        } else {
            //passwords do not match
            res.status(403).json({
                success : false,
                message : "Passwords do not match"
            })
        }

    } catch (error) {
        
    }
}