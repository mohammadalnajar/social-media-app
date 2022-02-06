import express from 'express';
import {
    createPost,
    createPostWithImages,
    deletePost,
    getAllFriendsPosts,
    getAllUserPosts,
    getAllUsersPosts,
    updatePost,
} from '../controllers/posts.js';
import checkPostAuthor from '../middlewares/checkPostAuthor.js';
import isJsonCheck from '../middlewares/isJson.js';
import isUserLoggedIn from '../middlewares/isLoggedIn.js';

const router = express.Router();

router
    .route('/')
    .get(isUserLoggedIn, getAllUserPosts)
    .post(isUserLoggedIn, isJsonCheck, createPostWithImages, createPost)
    // createPWI and createP function should happen in order
    .put(isUserLoggedIn, isJsonCheck, checkPostAuthor, updatePost)
    .delete(isUserLoggedIn, isJsonCheck, checkPostAuthor, deletePost);
router.route('/friends').get(isUserLoggedIn, getAllFriendsPosts);
router.route('/users').get(isUserLoggedIn, getAllUsersPosts);

export default router;
