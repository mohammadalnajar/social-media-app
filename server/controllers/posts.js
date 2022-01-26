import Post from '../models/Post.js';
import User from '../models/User.js';
import { errorRes, successRes } from '../utils/reqResponse.js';
import uploadImg from './uploadImages.js';

// ========= get ALL posts (everyone) =========
export const getAllUsersPosts = (req, res) => {
    res.send('getAllUsersPosts');
};
// ========= get ALL posts (friends) =========
export const getAllFriendsPosts = (req, res) => {
    res.send('getAllFriendsPosts');
};
// ========= get ALL posts (user) =========
export const getAllUserPosts = async (req, res) => {
    const { _id: userId } = req.session.userData;
    const user = await User.findById(userId);
    const posts = await Promise.all(
        user.posts.map(async (postId) => {
            try {
                const post = await Post.findById(postId);
                return post;
            } catch (error) {
                console.log(error, 'in get posts');
                return errorRes(
                    res,
                    500,
                    'failed to get user posts ...',
                    null,
                    null
                );
            }
        })
    );
    const data = posts;
    return successRes(res, 200, 'ok', 'all user posts found', data);
};
// ========= create a post =========
export const createPost = async (req, res) => {
    console.log(req.body, 'body');
    // get userId from session
    const { _id: userId } = req.session.userData;

    // create post
    const { text, visibility, imageUrl } = req.body;
    try {
        const createdPost = await Post.create({
            text,
            visibility,
            imageUrl,
        });
        if (createdPost) {
            // add post id to user posts array
            const updated = await User.findOneAndUpdate(
                { _id: userId },
                {
                    $push: { posts: createdPost.id },
                }
            );
            if (updated) {
                // get post data after update
                const post = await Post.findById(createdPost.id);
                const data = post;
                return successRes(res, 200, 'ok', 'post is created', data);
            }
            return errorRes(
                res,
                400,
                'failed to add the post created to the user ...',
                null,
                null
            );
        }
        return errorRes(res, 400, 'failed to create a post ...', null, null);
    } catch (error) {
        console.log(error, 'error in create post ...');
        return errorRes(res, 500, 'server error');
    }
};
// ========= update a post =========
export const updatePost = async (req, res) => {
    const { id: postId, text, visibility } = req.body;
    try {
        const updated = await Post.findByIdAndUpdate(
            { _id: postId },
            { $set: { text, visibility, updatedAt: Date.now() } }
        );
        if (updated) {
            const updatedPost = await Post.findById(postId);
            return successRes(res, 200, 'ok', 'post is updated', {
                data: updatedPost,
            });
        }
        return errorRes(res, 404, 'post was not found', null, null);
    } catch (error) {
        console.log(error, 'error in update post');
        return errorRes(res, 500, 'failed to update post', null, null);
    }
};
// ========= delete a post =========
export const deletePost = async (req, res) => {
    const { _id: userId } = req.session.userData;
    const { id: postId } = req.body;
    try {
        const deleted = await Post.findByIdAndDelete(postId);

        console.log(deleted);
        if (deleted) {
            const updateUserPostsArray = await User.findByIdAndUpdate(
                { _id: userId },
                { $pull: { posts: postId } }
            );
            if (updateUserPostsArray) {
                return successRes(res, 200, 'ok', 'post is deleted ...');
            }
            return errorRes(
                res,
                404,
                'failed to delete post from user schema ...',
                null,
                null
            );
        }
        return errorRes(res, 404, 'post was not found', null, null);
    } catch (error) {
        return errorRes(res, 500, 'failed to delete post ...', null, null);
    }
};
