//import Model
const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

//business logic

exports.createComment = async(req,res) => {
    //this is an async request as interacting with dB requires a network call and we don't want our main thread
    //to get blocked bcz of this
    //this is gonna be a POST rquest, hence fetch data from request ki body
    try {
        const {post, user, body} = req.body;
        //create a new comment object

        const comment = new Comment({
            post,user,body
        });

        const savedComment = await comment.save();
        //applied save function on our object(comment)

        //now we have to also add this comment ki id in the respective post ke comments section mein
        //so that posts can fetch the respective comments
        //hence, find the post by its ID, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate( post, {$push : 
                {
                    comments : savedComment._id
                }
            }, { new : true}
        ).populate("comments").exec();
        //this is doing : finding by post's id and then pushing the savedComment's id into the comments array of the 
        //post, then returning the new and updated value and to the updatedPost variable and then
        //populate the comments array with comment document(entry) and then executing the query

        res.json({
            post : updatedPost,
        })

    } catch (error) {
        return res.status(500).json({
            error : "Error while creating Cooment"
        })
    }
}