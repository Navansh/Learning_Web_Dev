
const Blog = require('../models/Blog')



exports.likeBlog = async(req,res) => {
    try {
        const {id} = req.params;
        const status = await Blog.findByIdAndUpdate(
            {_id:id},
            {likeStatus : true}
        )

        res.status(200).json({
            success : true,
            data : status,
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

exports.dislikeBlog = async(req,res) => {
    try {
        const {id} = req.params;
        const status = await Blog.findByIdAndUpdate(
            {_id:id},
            {likeStatus : false}
        )

        res.status(200).json({
            success : true,
            data : status,
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

