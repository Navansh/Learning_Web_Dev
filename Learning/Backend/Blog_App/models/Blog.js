const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        maxLength : 50,
    },
    title : {
        type : String,
        required : true,
        maxLegnth : 50,
    },
    content : {
        type : String,
        required : true,
        maxLegnth : 5000,
    },
    likeStatus : {
        type : Boolean,
        required : true,
        default : false,
    },
    comment : {
        type : String,
        required : false,
        default : "",
    }
})

module.exports = mongoose.model("Blog",blogSchema)
