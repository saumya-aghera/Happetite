import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js'
const router = express.Router();

//We'll have to implement the same for Quiz and form instead of Posts

router.get('/', getPosts);
router.post('/',auth, createPost);

router.patch('/:id',auth, updatePost);
router.delete('/:id', auth,deletePost);
router.patch('/:id/likePost',auth, likePost);

export default router;