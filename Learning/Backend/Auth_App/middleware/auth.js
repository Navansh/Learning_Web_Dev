//middleware for auth, isStudent, isAdmin
const jwt = require("jsonwebtoken")
require("dotenv").config()

//1st 
exports.auth = (req,res,next) => {
    //This is for auth
    try {
        //extract JWT Token : Can be extracted from Header, req.body and from cookie
        const token = req.headers.authorization.split(' ')[1] || req.cookies.token
        //don't use req.body
        console.log(req.cookies.token)
        //this will give error if not using cookie parser
        //header wali configuration is the most preferred one

        if(!token){
            return res.status(401).json({
                success : false,
                message : "Token Missing"
            })
        } 

        // console.log(process.env.JWT_SECRET)

        //verify the given token which was received from the request's body
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            //we are just verifying here that this token that is being received was sent by us or not
            
            console.log(decode)

            req.user = decode;
            //this is done cz aage jaakar, ye hi istemaal hoga for the next middleware to check the role
            // and role toh payload mein pada hai
            //iss decoded data ke andar hi role ka answer hai email, role and id,
            //jiska data hamne payload(matlab request wale) ke andar user object bana kar pass kar diya to next middleware
            //kaise pass kiya -> Using request 

        } catch (error) {
            return res.status(401).json({
                success : false,
                message : "Token Invalid"
            })
        }


        next();
        //moving on to next middleware
    } catch (error) {
        return res.status(401).json({
            success : false,
            message : "Something went Wrong"
        });
    }
}

exports.isStudent = (req,res, next) => {
    //this middleware is for Auth

    //ye check karne ke liye ki woh student hai ki nhi can be done through checking its role
    // console.log(req.user.role)
    try {
        if (req.user.role !== "Student" ) {
            return res.status(401).json({
                success : false,
                message : "This is a Protected Route for Students only" 
            })
        }

        //success wala response bhej nhi rhe as woh pehle se hi route likhte time hamne code kar diya tha

        next();
    } catch (error) {
        return res.status(501).json({
            success : false,
            message : "User Role Cannot be Verified"
        });
    }
}

exports.isAdmin = (req,res, next) => {
    //this middleware is for Auth
    //ye check karne ke liye ki woh student hai ki nhi can be done through checking its role
    try {
        if (req.user.role !== "Admin" ) {
            return res.status(401).json({
                success : false,
                message : "This is a Protected Route for Students only" 
            })
        }

        //success wala response bhej nhi rhe as woh pehle se hi route likhte time hamne code kar diya tha

        next();
    } catch (error) {
        return res.status(501).json({
            success : false,
            message : "User Role Cannot be Verified"
        });
    }
}

