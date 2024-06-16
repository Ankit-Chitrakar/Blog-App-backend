const Post = require('../models/postModel');

exports.viewPostById = async (req, res) =>{
    try{
        const {id} = req.params;
        const post = await Post.findById({_id: id}).populate("comments").populate("likes").exec();

        res.status(200).json({
            success: true,
            post: post,
            message: `Successfully fetch Post id: ${id}`,
          });
    }
    catch(err){
        res.status(500).json({
            success: false,
            post: err.message,
            message: "Can't fetched the post!",
          });
    }
}