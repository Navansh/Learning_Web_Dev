//import the model
const { response } = require("express");
const Todo = require("../models/ToDo");

//define route handler

exports.createTodo = async(req,res) =>{
    try {
        //as this is a createTodo call, which means POST request -> Hence data aa rha hoga, jo submit karna hoga
        //hence extract that data
        //so, extracting title and description from request ki body
        const {title, description} = req.body
        const repsonse = await Todo.create({title,description})
        //create a new Todo object and insert in Db
        //create is used to insert new data in the database
        res.status(200).json(
            {
                success : true,
                data : response,
                message : "Entry created Successfully"
            }
        )
        //sending a json response with success flag
    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success : false,
            data : "internal Server Error",
            message : error.message
        })

    }
}
