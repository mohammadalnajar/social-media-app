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
    .post(isUserLoggedIn, isJsonCheck, createPost);
router.route('/friends').get(isUserLoggedIn, getAllFriendsPosts);
router.route('/users').get(isUserLoggedIn, getAllUsersPosts);
router.route('/update').post(isUserLoggedIn, isJsonCheck, updatePost);
router.route('/delete').post(isUserLoggedIn, deletePost);

export default router;