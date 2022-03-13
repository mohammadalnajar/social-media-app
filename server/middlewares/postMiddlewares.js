import Comment from '../models/Comment.js';
import Post from '../models/Post.js';
import commentServices from '../services/comments.js';
import userServices from '../services/users.js';
import { errorRes } from '../utils/reqResponse.js';

export const checkPostAuthor = async (req, res, next) => {
    const { _id: userId } = req.session.userData;
    const { id: postId } = req.body;
    try {
        const foundUser = await userServices.getUserData(userId);
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
export const checkCommentLiked = async (req, res, next) => {
    const { _id: userId } = req.session.userData;
    const { commentId } = req.params;
    const { like } = req.body;
    try {
        if (like) {
            if (typeof like === 'boolean') {
                const check = await Comment.find({
                    _id: commentId,
                    likes: userId,
                });
                console.log(check, 'check ==============');
                if (check.length > 0) {
                    return errorRes(
                        res,
                        400,
                        'this user already liked this comment ...'
                    );
                }
                return next(); // like comment
            }
            throw new Error('check like datatype ...');
        }
        return next(); // unlike comment
    } catch (error) {
        console.log(error, 'failed to checkCommentLiked');
        return errorRes(res, 500, 'something went wrong ...');
    }
};

export const checkCommentAuthor = async (req, res, next) => {
    const { _id: userId } = req.session.userData;
    const { commentId } = req.params;
    try {
        const foundComment = await commentServices.getCommentById(commentId);
        if (foundComment) {
            if (foundComment.userData.userId === userId) return next();
            return errorRes(res, 403, 'you are not the author of the post');
        }
        return errorRes(res, 404, 'user was not found in db');
    } catch (error) {
        console.log(error, 'error in check post author');
        return errorRes(res, 500, 'Something went wrong');
    }
};
