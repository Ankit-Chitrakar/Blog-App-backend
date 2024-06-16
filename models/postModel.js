const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        postTitle: {
            type: String,
            required: true,
            maxLength: 100,
        },
        postBody: {
            type: String, 
            required: true,
            maxLength: 500,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Like",
            }
        ],
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            }
        ]
    }
)

module.exports = mongoose.model("Post", postSchema);