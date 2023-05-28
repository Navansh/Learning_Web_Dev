//import the model
const { response } = require("express");
const Todo = require("../models/ToDo");

exports.getTodo = async(req,res) =>{
    try {
        //as this is a get Call -> Data has to be given to the user, and hence retrieved form the database
        //fetch all todo items from database
        const todos = await Todo.find({})
        //now as we haven't given any parameter for finding, so it will bring all the matching items of Todo Model
        res.status(200).json({
            success : true,
            data : todos,
            message : "Entire Todo fetched"
        })
        //sending a json response with success flag
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success : false,
            error : error.message,
            message : "Server Error"
        })
    }
}

exports.getTodoById = async(req,res) =>{
    try {
        //get todo items from Db based on ID
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})
        //_id is the key Name in the databse for storing id value

        //data for given id : NOT Found
        if(!todo){
            return res.status(404).json({
                success : false,
                message : "No Data found for the given ID",
            })
        }
        //if this case is not hit then data found :-
        res.status(200).json({           
                success : true,
                data : todo,
                message : `Data for the Id : ${id} successfully fetched`,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success : false,
            error : error.message,
            message : "Server Error"
        })
    }
}
