const express = require('express')
const router = express.Router();

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
    res.json({
        success : true,
        message : "Welcome to the Protected Route for Admins"
    })
})



module.exports = router;