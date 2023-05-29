const express = require('express')
const router = express.Router();

const {createBlog} = require("../controllers/ceateBlog")

router.post('/posts/create', createBlog)






module.exports = router;
