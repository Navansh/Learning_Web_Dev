const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true,
    },
    likes : [
        //we create a array of people who've liked the post
        {
            type : mongoose.Schema.Types.ObjectId,
            //now this is type we are referring to 
            ref : "Like",
        }
    ],
    comments : [
        //array of people who've commneted on this post, and each comment is of type commentSchema
        {
            type : mongoose.Schema.Types.ObjectId,
            //now this is type we are referring to 
            ref : "Comment", 
        }
    ]


})

module.exports = mongoose.model("Post", postSchema)