const Post = require('../models/postModel');
const Like = require('../models/likeModel');

exports.likePost = async (req, res) =>{
    try{
        const {post, user} = req.body;
        const like = new Like({
            post,
            user,
        })

        const savedLike = await like.save();

        // find id of the post and push the like id into likes array 
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {
            likes: savedLike._id,
        }}, {new: true}).populate("likes").exec();

        res.status(200).json({
            success: true,
            post: updatedPost,
            message: "Hit like button on this post.",
          });

    }
    catch(err){
        res.status(500).json({
            success: false,
            post: err.message,
            message: "Can't hit like!",
          });
    }
}