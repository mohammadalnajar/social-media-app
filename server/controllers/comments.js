/* eslint-disable node/no-unsupported-features/es-builtins */
import commentServices from '../services/comments.js';
import postServices from '../services/posts.js';
import { errorRes, successRes } from '../utils/reqResponse.js';

// ========= get comments of a post =========

export const getPostComments = async (req, res) => {
    const { postId } = req.params;
    try {
        const foundPost = await postServices.getPostById(postId);
        if (foundPost) {
            const { comments: commentsIds } = foundPost;

            const { commentsData } = await commentServices.getPostComments(
                commentsIds
            );

            return successRes(res, 200, 'ok', 'comments found', {
                comments: commentsData,
            });
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
        const createdComment = await commentServices.createComment({
            text,
            userId,
            postId,
        });
        if (createdComment) {
            const updatedPost = await postServices.addComment(
                postId,
                createdComment
            );
            if (updatedPost) {
                const commentData = await commentServices.getCommentData(
                    createdComment
                );

                return successRes(
                    res,
                    200,
                    'ok',
                    'comment is created successfully ...',
                    {
                        comment: commentData,
                    }
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
        const updated = await commentServices.updateComment(commentId, {
            text,
        });
        if (updated) {
            const comment = await commentServices.getCommentById(commentId);
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
        const foundComment = await commentServices.getCommentById(commentId);
        if (foundComment) {
            const deleted = await commentServices.deleteComment(commentId);
            if (deleted) {
                const updatePostComments = await postServices.deleteComment(
                    deleted.postId,
                    commentId
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

// ========= like or unlike a comment =========
export const likeComment = async (req, res) => {
    const { commentId } = req.params;
    const { like } = req.body;
    try {
        const foundComment = await commentServices.getCommentById(commentId);
        if (foundComment) {
            if (like) {
                // like a comment
                const result = await commentServices.likeComment(commentId);
                if (result) {
                    return successRes(res, 200, 'ok', 'comment is liked ...');
                }
            }
            // unlike a comment
            const result = await commentServices.unlikeComment(commentId);
            if (result) {
                return successRes(res, 200, 'ok', 'comment is unliked ...');
            }
        }
        return errorRes(res, 404, ' comment is not found ...');
    } catch (error) {
        console.log(error, 'error in delete comment ...');
        return errorRes(res, 500, 'something went wrong ...');
    }
};
