const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
        user: {
            type: String,
            required: true,
            maxLength: 100,
        },
        commentBody: {
            type: String,
            required: true,
            maxLength: 500,
        }
    }
)

module.exports = mongoose.model("Comment", commentSchema);