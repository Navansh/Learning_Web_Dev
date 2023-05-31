const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema( {
    //kis post par like kar rhe ho and kaun like kar rha hai
    post : {
        type : mongoose.Schema.Types.ObjectId,
        //means yaha par iss post ko refer kar rhe, as ye wahi post hai jispar commentk kiya hai
        ref : "Post", //reference to the post model
                  
    },
    user : {
        type : String,
        required : true,
    },
})

module.exports = mongoose.model("Like", likeSchema)