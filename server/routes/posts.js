import express from 'express';
import {
    createPost,
    deletePost,
    getPosts,
    updatePost,
} from '../controllers/posts.js';
import isJsonCheck from '../middlewares/isJson.js';
import isUserLoggedIn from '../middlewares/isLoggedIn.js';

const router = express.Router();

router
    .route('/')
    .get(isUserLoggedIn, getPosts)
    .post(isUserLoggedIn, isJsonCheck, createPost);
router.route('/update').post(isUserLoggedIn, isJsonCheck, updatePost);
router.route('/delete').post(isUserLoggedIn, deletePost);

export default router;
