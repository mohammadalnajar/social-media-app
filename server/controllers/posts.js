import Post from '../models/Post.js';
import User from '../models/User.js';
import { errorRes, successRes } from '../utils/reqResponse.js';

// ========= get ALL posts (everyone) =========
export const getAllUsersPosts = (req, res) => {
    res.send('getAllUsersPosts');
};
// ========= get ALL posts (friends) =========
export const getAllFriendsPosts = (req, res) => {
    res.send('getAllFriendsPosts');
};
// ========= get ALL posts (user) =========
export const getAllUserPosts = (req, res) => {
    res.send('getAllUserPosts');
};
// ========= create a post =========
export const createPost = async (req, res) => {
    // get userId from session
    const { _id: userId } = req.session.userData;

    // create post
    const { text, visibility } = req.body;
    try {
        const createdPost = await Post.create({
            text,
            visibility: visibility.toLowerCase(),
        });
        if (createdPost) {
            const updated = await User.findOneAndUpdate(
                { _id: userId },
                {
                    $push: { posts: createdPost.id },
                }
            );
            if (updated) {
                const user = await User.findById(userId);
                const { password, isAdmin, ...rest } = user._doc;
                req.session.userData = rest;
                return successRes(res, 200, 'ok', 'post is created', rest);
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
export const updatePost = (req, res) => {
    res.send('update post');
};
// ========= delete a post =========
export const deletePost = (req, res) => {
    res.send('delete post');
};
