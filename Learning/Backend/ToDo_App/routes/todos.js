//we have to map aroute with a controller 
//hence we need to fetch the required controller first

const express = require('express')
const router = express.Router();

//import Controller
const {createTodo} = require("../controllers/createTodo")

//define API routes
router.post('/createTodo',createTodo);
//we successfully mapped path with the controller\

module.exports = router