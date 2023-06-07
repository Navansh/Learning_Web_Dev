const bcrypt = require('bcrypt')
const User = require("../models/User")
const jwt = require('jsonwebtoken')
require('dotenv').config();

function isValidEmail(email) {
    // Validate email using regular expressions
    if (!email) {
      return false;
    }
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  function isValidPassword(password) {
    // Validate password using regular expressions
    if (!password) {
      return false;
    }
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return pattern.test(password);
  }

//signup route handler
exports.signup = async(req,res) => {
    try {

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

        if(!isValidEmail(email) || !isValidPassword(password)){
            return res.status(400).json({
                success : false, 
                message : "Please check email or password"
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

        let user = await User.findOne({email});

        //if not registered 
        if (!user) {
            return res.status(401).json({
                success : false,
                message : "Please Signup First"
            })
        }

        const payload = {
            email : user.email,
            id : user._id,
            role : user.role
        }

        //verify password and generate a JWT Token
        if (await bcrypt.compare(password, user.password)) {
            //passwords matched,
            let token = jwt.sign(payload, process.env.JWT_SECRET,
                {expiresIn : "24h"});
            //token created
            user = user.toObject();
            //Ye Kyu needed hai ? 
            user.token = token;
            //ye user ki field Db se nikaali thi and usmein ek token ki field banakar, ye insert kar diya
            //now we can send this user's data as a cookie, and use it for further authentication

            //but isse toh password bhi chala jayega
            // so we set the password as undefined
            user.password = undefined;
            //***This is only done for our local variable and not in the actual database */

            //creating a cookie and sending it in response
            const options = {
                expires : new Date(Date.now() + 3*24*60*60*1000),
                //the expiration date is 3 days from now, and the time is in ms 
                httpOnly : true
                //this means client side se ye cookie access nhi ho payegi
            }

            res.cookie("token", token, options).status(200).json({
                //cookie ka naam "token" rakha hai and uske andar sirf token hi insert kara hai, 
                // and options toh upar he define kar rakhe hai 
                success : true,
                token,
                user,
                message : "User Logged in successfully"
            })


        } else {
            //passwords do not match
            res.status(403).json({
                success : false,
                message : "Passwords do not match"
            })
        }


    } catch (error) {
        console.log(error)
        return res.status(300).json({
            success : false,
            message : "Login Failure"
        })       
    }
}