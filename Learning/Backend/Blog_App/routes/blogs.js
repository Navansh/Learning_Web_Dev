const express = require('express')
const router = express.Router();

const {createBlog} = require("../controllers/ceateBlog");
const { getBlog, getAllBlogs } = require('../controllers/getBlog');
const {likeBlog, dislikeBlog} = require('../controllers/updateBlogLikeStatus')
const {createComment, getComments} = require('../controllers/createComment')

router.post('/posts/create', createBlog)

router.get('/posts',getAllBlogs)

router.get('/posts/:userName',getBlog)

router.put('/likes/like/:id',likeBlog )
router.put('/likes/dislike/:id',dislikeBlog )

router.put('/comments/create/:id', createComment)
router.get('/comments/:id',getComments )






module.exports = router;
