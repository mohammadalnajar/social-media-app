import Post from '../models/Post.js';
import User from '../models/User.js';
import { errorRes } from '../utils/reqResponse.js';

export const checkPostAuthor = async (req, res, next) => {
    const { _id: userId } = req.session.userData;
    const { id: postId } = req.body;
    try {
        const foundUser = await User.findById(userId);
        if (foundUser) {
            const foundPost = foundUser.posts.some((pId) => pId === postId);
            if (foundPost) return next();
            return errorRes(res, 403, 'you are not the author of the post');
        }
        return errorRes(res, 404, 'user was not found in db');
    } catch (error) {
        console.log(error, 'error in check post author');
        return errorRes(res, 500, 'Something went wrong');
    }
};

export const checkPostLikedOrDisliked = async (req, res, next) => {
    const { _id: userId } = req.session.userData;
    const { postId, like, dislike } = req.body;
    try {
        if (like) {
            if (typeof like === 'boolean') {
                const check = await Post.find({ _id: postId, likes: userId });
                if (check.length > 0) {
                    return errorRes(res, 400, 'like is already existed ...');
                }
                return next();
            }
            throw new Error('check like datatype ...');
        }
        if (dislike) {
            if (typeof dislike === 'boolean') {
                const check = await Post.find({
                    _id: postId,
                    dislikes: userId,
                });
                if (check.length > 0) {
                    return errorRes(res, 400, 'dislike is already existed ...');
                }
                return next();
            }
            throw new Error('check dislike datatype ...');
        }
        return next();
    } catch (error) {
        console.log(error, 'failed to checkPostLikedOrDisliked');
        return errorRes(res, 500, 'something went wrong ...');
    }
};
