const mongoose = require("mongoose")
//imported mongoose instance

//route handler
const commentSchema = new mongoose.Schema(
    {
        post : {
            type : mongoose.Schema.Types.ObjectId,
            //means yaha par iss post ko refer kar rhe, as ye wahi post hai jispar commentk kiya hai
            ref : "Post", //reference to the post model
                       
        }
    }
)