const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

exports.updatePostById = async (req, res) => {
    try {
        const { postId} = req.params;
        const { postTitle, postBody, comments } = req.body;

        // Update the post
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { postTitle, postBody },
            { new: true, runValidators: true }
        );

        // Update comments if provided
        if (comments && comments.length > 0) {
            for (let comment of comments) {
                const { commentId, commentBody, user } = comment;

                if (commentId) {
                    // Update existing comment
                    await Comment.findByIdAndUpdate(
                        commentId,
                        { commentBody, user },
                        { new: true, runValidators: true }
                    );
                } else {
                    // Create new comment
                    const newComment = new Comment({
                        post: postId,
                        commentBody,
                        user
                    });
                    await newComment.save();
                    updatedPost.comments.push(newComment._id);
                }
            }
            await updatedPost.save();
        }

        res.status(200).json({
            success: true,
            post: updatedPost,
            message: "Success",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            post: err.message,
            message: "Fail",
        });
    }
};
