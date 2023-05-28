const { response } = require("express");
const Todo = require("../models/ToDo");

exports.updateTodo = async(req,res) => {
    try {
        //firstly get the Id for Todo whose data we want to update
        //as this is a PUT request means we will be sent the data to update in place of our old data, 
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt : Date.now()} 
        )

        res.status(200).json({
            success : true,
            data : todo,
            message : "Updated Successfully"
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