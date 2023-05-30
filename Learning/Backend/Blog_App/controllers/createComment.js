const Blog = require('../models/Blog')

exports.createComment = async(req,res) => {
    try {
        //this is actually an update request meaning a PUT request, cz comment ko empty string se kuch aur update kar rhe

        const {id} = req.params;
        const {comment} = req.body;

        const commentStatus = await Blog.findByIdAndUpdate(
            {_id:id},
            {comment : comment}
        )

        res.status(200).json({
            success : true,
            data : commentStatus,
            message : "Comment Added Successfully"
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

exports.getComments = async(req,res) => {
    try {
        //here we are fetching comments by ID, so this is a GET Request
        const id = req.params.id;
        const {comment} = await Blog.findById({_id:id})
        fetchedComments = comment

        if(fetchedComments === ""){
            return res.status(404).json({
                success : false,
                message : "No Comments found for the given post",
            })
        }
        //if this case is not hit then data found :-
        res.status(200).json({           
                success : true,
                data : fetchedComments,
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