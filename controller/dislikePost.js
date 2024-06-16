const Like = require('../models/likeModel');
const Post = require('../models/postModel');

exports.dislikePost = async (req, res) =>{
    try{
        const {post, like} = req.body;
        // find the id of like and delete from likes array
        const dislike = await Like.findByIdAndDelete({_id: like, post: post});

        // update the post model by removing the like out from likes array
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: like}}, {new: true});

        res.status(200).json({
            success: true,
            post: updatedPost,
            message: "Post hit a dislike button.",
          });
    }
    catch(err){
        res.status(500).json({
            success: false,
            post: err.message,
            message: "Can't dislike on this post!",
          });
    }
}