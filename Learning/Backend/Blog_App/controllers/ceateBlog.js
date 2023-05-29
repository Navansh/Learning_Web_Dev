const { response } = require("express");

const Blog = require('../models/Blog')

exports.createBlog = async(req,res) =>{
    try {
        const { userName, title, content } = req.body;
        const repsonse = await Blog.create({userName,title,content})

        res.status(200).json(
            {
                success : true,
                data : response,
                message : "Blog created Successfully"
            }
        )
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