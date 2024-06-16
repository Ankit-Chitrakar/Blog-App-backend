const Like = require('../models/likeModel');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

exports.viewAllPost = async (req, res) =>{
    try{
        const response = await Post.find().populate("comments").populate("likes").exec();

        res.status(200).json({
            success: true,
            post: response,
            message: "All Post are Fetched!!",
          });


    }
    catch(err){
        res.status(500).json({
            success: false,
            post: err.message,
            message: "Can't fetched all post",
          });
    }
}
