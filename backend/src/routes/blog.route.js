import express from 'express';
import BlogController from '../controllers/blog.controller.js';
import upload from '../configs/multer.config.js';

const router = express.Router();

router.post('/create-blog', upload.single('img'), BlogController.createBlog);
router.get('/all-blogs', BlogController.showAllBlogs);
router.get('/single-blog/:id', BlogController.showSingleBlog);
router.put('/update-blog/:id', BlogController.updateBlog);
router.delete('/delete-blog/:id', BlogController.deleteBlog);

export default router;
