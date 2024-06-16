const express = require('express');
const { createPost } = require('../controller/createPost');
const { createComment } = require('../controller/createComment');
const { likePost } = require('../controller/likePost');
const { dislikePost } = require('../controller/dislikePost');
const { viewAllPost } = require('../controller/viewAllPost');
const { viewPostById } = require('../controller/viewPostById');
const { updatePostById } = require('../controller/updatePostById');
const router = express.Router();

// Routes for creating a post
router.post('/posts/create', createPost)

// Routes for creating comment
router.post('/comments/create', createComment);

// Routes for hit a like on a post
router.post('/likes/like', likePost);

// Routes for hit a dislike on a post
router.post('/likes/dislike', dislikePost);

// Routes for view all post
router.get('/posts', viewAllPost);

// Routes for view one post by id
router.get('/posts/post/:id', viewPostById);

// Routes for update one post by id
router.put('/posts/update/:postId', updatePostById)    // Need to work more 

module.exports = router;