const Blog = require("../models/Blog");


exports.getBlog = async(req,res) => {
    try {
        //we are fetching the blogs based on the userName
        //so first we need to fetch the userName from the request parameter
        const username  = req.params.userName;
        const Blogs = await Blog.find({userName : username})

        if(!Blogs){
            return res.status(404).json({
                success : false,
                message : "No Data found for the given ID",
            })
        }
        //if this case is not hit then data found :-
        res.status(200).json({           
                success : true,
                data : Blogs,
                message : `Data for the UserName : ${username} successfully fetched`,
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

exports.getAllBlogs = async(req,res) => {
    try {
        //we are fetching the blogs based on the userName
        //so first we need to fetch the userName from the request parameter
        const Blogs = await Blog.find({})

        if(!Blogs){
            return res.status(404).json({
                success : false,
                message : "No Data found for the given ID",
            })
        }
        //if this case is not hit then data found :-
        res.status(200).json({           
                success : true,
                data : Blogs,
                message : `Data for all the blogs successfully fetched`,
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