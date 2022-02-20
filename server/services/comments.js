/* eslint-disable node/no-unsupported-features/es-builtins */
import Comment from '../models/Comment.js';
import getUserData from './users.js';

const commentServices = {
    async getPostComments(commentsIds) {
        try {
            // get all comments objs
            const commentsArr = await Promise.allSettled(
                commentsIds.map(async (commentId) => {
                    const comment = await Comment.findById(commentId);
                    if (comment) return comment;
                    return null;
                })
            );
            const comments = commentsArr.map((obj) => obj.value);

            // get complete comments data with user data
            const commentsDataArr = await Promise.allSettled(
                comments.map(async (comment) => {
                    const commentData = await this.getCommentData(comment);
                    return commentData;
                })
            );

            const commentsData = commentsDataArr.map((obj) => obj.value);
            return { commentsData };
        } catch (error) {
            console.log(error, 'error in comment service getPostComments ...');
            throw new Error(error);
        }
    },

    async getCommentData(comment) {
        const { _id, firstName, lastName } = await getUserData(
            comment.userId,
            'get user data in comment service getCommentData' // this is the context to inform where this service get used
        );
        const { userId, ...rest } = comment._doc;
        return {
            ...rest, // rest data from comment obj
            userData: { userId: _id, firstName, lastName },
        };
    },

    async createComment({ text, userId, postId }) {
        try {
            const createdComment = await Comment.create({
                text,
                userId,
                postId,
            });
            return createdComment;
        } catch (error) {
            throw new Error(error);
        }
    },
    async getCommentById(commentId) {
        try {
            const comment = await Comment.findById(commentId);
            const commentData = await this.getCommentData(comment);
            return commentData;
        } catch (error) {
            throw new Error(error);
        }
    },
};

export default commentServices;
