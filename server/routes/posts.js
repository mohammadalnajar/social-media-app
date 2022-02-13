import express from 'express';
import {
    createPost,
    createPostWithImages,
    deletePost,
    dislikePost,
    getAllFriendsPosts,
    getAllUserPosts,
    getAllUsersPosts,
    getPostDislikes,
    getPostLikes,
    likePost,
    updatePost,
} from '../controllers/posts.js';
import isJsonCheck from '../middlewares/isJson.js';
import isUserLoggedIn from '../middlewares/isLoggedIn.js';
import {
    checkPostAuthor,
    checkPostLikedOrDisliked,
} from '../middlewares/postMiddlewares.js';

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
router
    .route('/like/:postId')
    .get(isUserLoggedIn, getPostLikes)
    .post(isUserLoggedIn, isJsonCheck, checkPostLikedOrDisliked, likePost);
router
    .route('/dislike/:postId')
    .get(isUserLoggedIn, getPostDislikes)
    .post(isUserLoggedIn, isJsonCheck, checkPostLikedOrDisliked, dislikePost);

export default router;
