import express from 'express';
import {
    createPost,
    deletePost,
    getAllFriendsPosts,
    getAllUserPosts,
    getAllUsersPosts,
    updatePost,
} from '../controllers/posts.js';
import isJsonCheck from '../middlewares/isJson.js';
import isUserLoggedIn from '../middlewares/isLoggedIn.js';

const router = express.Router();

router
    .route('/')
    .get(isUserLoggedIn, getAllUserPosts)
    .post(isUserLoggedIn, isJsonCheck, createPost)
    .put(isUserLoggedIn, isJsonCheck, updatePost)
    .delete(isUserLoggedIn, isJsonCheck, deletePost);
router.route('/friends').get(isUserLoggedIn, getAllFriendsPosts);
router.route('/users').get(isUserLoggedIn, getAllUsersPosts);

export default router;
