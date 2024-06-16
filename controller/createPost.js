const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const {postTitle, postBody} = req.body;
    const response = await Post.create({postTitle, postBody});

    res.status(200).json({
      success: true,
      post: response,
      message: "Post created successfully.",
    });

    res.send("Hello");

  } catch (err) {
    res.status(500).json({
      success: false,
      post: err.message,
      message: "Can't create post!",
    });
  }
};
