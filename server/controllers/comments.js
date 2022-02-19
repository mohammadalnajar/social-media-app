/* eslint-disable node/no-unsupported-features/es-builtins */
import Comment from '../models/Comment.js';
import Post from '../models/Post.js';
import getUserData from '../services/users.js';
import { errorRes, successRes } from '../utils/reqResponse.js';

// ========= get comments of a post =========

export const getPostComments = async (req, res) => {
    const { postId } = req.params;
    try {
        const foundPost = await Post.findById(postId);
        if (foundPost) {
            const { comments: commentsIds } = foundPost;
            const commentsArr = await Promise.allSettled(
                commentsIds.map(async (commentId) => {
                    const comment = await Comment.findById(commentId);
                    if (comment) return comment;
                    return null;
                })
            );
            const comments = commentsArr.map((obj) => obj.value);

            const commentsDataArr = await Promise.allSettled(
                comments.map(async (comment) => {
                    const { _id, firstName, lastName } = await getUserData(
                        comment.userId
                    );
                    const { userId, ...rest } = comment._doc;
                    return {
                        ...rest, // rest data from comment obj
                        userData: { userId: _id, firstName, lastName },
                    };
                })
            );
            const commentsData = commentsDataArr.map((obj) => obj.value);

            return successRes(res, 200, 'ok', 'comments found', commentsData);
        }
        return errorRes(res, 404, 'post was not found');
    } catch (error) {
        console.log(error, 'error in get comments of a post');
        return errorRes(res, 500, 'something went wrong');
    }
};

// ========= create a comment =========
export const createComment = async (req, res) => {
    const { postId } = req.params;
    const { _id: userId } = req.session.userData;
    const { text } = req.body;

    try {
        const createdComment = await Comment.create({ text, userId });
        if (createdComment) {
            const updatedPost = await Post.findOneAndUpdate(
                { _id: postId },
                { $push: { comments: createdComment.id } }
            );
            if (updatedPost) {
                const data = createdComment;

                return successRes(
                    res,
                    200,
                    'ok',
                    'comment is created successfully ...',
                    data
                );
            }
            throw new Error('failed to update post after creating');
        }

        return errorRes(res, 400, 'failed to create a comment ...');
    } catch (error) {
        console.log(error, 'error in create comment');
        return errorRes(res, 500, 'something went wrong in server ...');
    }
};

// ========= update a comment =========
export const updateComment = async (req, res) => {
    const { commentId } = req.params;
    const { text } = req.body;
    try {
        const updated = await Comment.findByIdAndUpdate(
            { _id: commentId },
            { $set: { text, updatedAt: Date.now() } }
        );
        if (updated) {
            const comment = await Comment.findById(commentId);
            return successRes(res, 200, 'ok', 'comment is edited ...', {
                comment,
            });
        }
        return errorRes(
            res,
            404,
            'failed to edit comment, comment was not found'
        );
    } catch (error) {
        console.log(error, 'error in edit comment ...');
        return errorRes(res, 500, 'something went wrong');
    }
};

// ========= delete a comment =========
export const deleteComment = async (req, res) => {
    const { commentId } = req.params;
    try {
        const foundComment = await Comment.findById(commentId);
        if (foundComment) {
            const deleted = await Comment.findByIdAndDelete(commentId);
            if (deleted) {
                const updatePostComments = await Post.findByIdAndUpdate(
                    {
                        _id: deleted.postId,
                    },
                    { $pull: { comments: commentId } }
                );
                if (updatePostComments) {
                    return successRes(
                        res,
                        200,
                        'ok',
                        'comment is deleted and post comments updated ...'
                    );
                }
                throw new Error('post is not found to be updated ... ');
            }
            throw new Error('failed to delete comment ... ');
        }
        return errorRes(res, 404, ' comment is not found ...');
    } catch (error) {
        console.log(error, 'error in delete comment ...');
        return errorRes(res, 500, 'something went wrong ...');
    }
};
