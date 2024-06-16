const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

exports.createComment = async (req, res) =>{
    try{
        const {post, user, commentBody} = req.body;
        const comment = new Comment({
            post,
            user,
            commentBody,
        }) 
        // save the comment on comment schema
        const savedComment = await comment.save();

        // find the post id and push the comment into comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {
            comments: savedComment._id,
        }}, {new: true}).populate("comments").exec();


        res.status(200).json({
            success: true,
            post: updatedPost,
            message: "Comment created successfully.",
          });

    }
    catch(err){
        res.status(500).json({
            success: false,
            post: err.message,
            message: "Can't create comment!",
          });
    }
}