const express = require('express')
const router = express.Router();

const User = require('../models/User')

//for every route there is a controller mapped to it

const {login, signup} = require("../controllers/Auth");
const {auth, isStudent, isAdmin} = require("../middleware/auth")

router.post("/login", login)
router.post("/signup", signup)

//Protected Routes
//jiske paas woh role hoga wohi woh route ko access kar payega

router.get("/test", auth, (req,res) => {
    res.json({
        success : true,
        message : "Welcome to the Protected Route"
    })

})


router.get("/student", auth, isStudent, (req,res) => {
    res.json({
        success : true,
        message : "Welcome to the Protected Route for Students"
    })

    // ismein sabse pehle path bataaye, then middleware bataaya, and then finally handler ya path bata do jo
    //karna chahte ho

})

router.get("/admin", auth, isAdmin, (req,res) => {
    //this will run on successful passing from the middlewares
    res.json({
        success : true,
        message : "Welcome to the Protected Route for Admins"
    })
})

router.get("/getEmail", auth, async (req,res) => {
    //while authorization we added decoded info of token to req.user
    // so we can extract ID from it

    // console.log("ID: ", id)

    try {
        const id = req.user.id;
        const user = await User.findById(id)

        res.status(200).json({
            success : true,
            user : user,
            message : "Welcome to the email service"
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message,
            message : "Haan bhai code fatt gya"
        })
    }
})



module.exports = router;