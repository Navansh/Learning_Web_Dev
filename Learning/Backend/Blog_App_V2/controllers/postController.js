const Post = require('../models/postModel')
const Comment = require('../models/commentModel')
const Like = require('../models/likeModel')

exports.createPost = async(req,res) => {
    try {
        const {title, body} = req.body;
        //data fetch
        const post = new Post({title, body,});
        //object creation
        const savedPost = await post.save();
        //saving the post

        res.json({
            post : savedPost,

        })


    } catch (error) {
        return res.status(400).json({
            error : "Error while creating post"
        })
    }
}

exports.getAllPosts = async(req,res) => {
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec()
        //if we haven't populated then, we would only gotten the ids of the comments and likes and not the actual
        //comments and likes
        res.json({
            posts,
        })
    } catch (error) {
        return res.status(400).json({
            error : "Error while fetching post"
        })
    }
}