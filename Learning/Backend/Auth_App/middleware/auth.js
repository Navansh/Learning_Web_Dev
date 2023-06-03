//middleware for auth, isStudent, isAdmin
const jwt = require("jsonwebtoken")
require("dotenv").config()

//1st 
exports.auth = (req,res,next) => {
    try {
        //extract JWT Token : Can be extracted from Header, req.body and from cookie
        //PENDING : Other ways to extract token from 
        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success : false,
                message : "Token Missing"
            })
        } 

        //verify the given token which was received from the request's body
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decode)

            req.user = decode;
            //this is done cz aage jaakar, ye hi istemaal hoga for the next middleware to check the role

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