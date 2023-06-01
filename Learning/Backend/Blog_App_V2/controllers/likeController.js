//2 routes : First : To Like, Second : To Dislike 

//how Like and Unlike happens from user's POV
// LIKE : A POST is liked by a USER if his username is present in the likes wala array for that post

//UNLIKE : Remove his username or his ID from that likes wala array

//importing models 
const Post = require('../models/postModel')
const Like = require('../models/likeModel')

//Like a POST 
exports.likePost = async(req,res) => {
    try {
        const {post,user} = req.body;
        const like = new Like({
            post,user,
        })

        const savedLike = await like.save();

        //updating the post 
        const updatedPost = await Post.findByIdAndUpdate(post,
            {$push : {likes : savedLike._id}}, {new : true}).populate("likes").exec()
            //pushing the likes ki id into the post, but while *viewing* we are populating that post with the 
            //likes ka data

        res.json({
            post : updatedPost
        })

    } catch (error) {
        return res.status(500).json({
            error : "Error while liking post"
        })
    }
}

exports.unlikePost = async(req,res) => {
    try {
        const {post,like} = req.body;
        //post ki ID and Like ki ID pass hogi body mein
       
        //find and delete in the like collection
        const deletedLike = await Like.findOneAndDelete({post: post, _id : like})
        //hence uss like ko delete kar do jiski post ki id ye hai and like ki id ye hai
        //and jis bhi pehli entry ke andar ye dono match kar jayenge, usko delete kar do

        //update the Post Collection
        const updatedPost = await Post.findByIdAndUpdate(post, 
            {$pull : {likes : deletedLike._id}}, {new : true})
            //hence post ke andar jis like ki id deletedLike ki id se match kar rhi hai, usse delete kar do


        //delete 2 jagah hoga
        //1st in the likes Db and second in the posts ke likes ka array

        res.json({
            post : updatedPost
        })

    } catch (error) {
        return res.status(500).json({
            error : "Error while Unliking Post"
        })
    }
}
