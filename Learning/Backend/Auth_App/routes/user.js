const express = require('express')
const router = express.Router();

//for every route there is a controller mapped to it

const {login, signup} = require("../controllers/Auth");

// router.post("/login", login)
router.post("/signup", signup)

module.exports = router;