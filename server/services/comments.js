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
        const { id, firstName, lastName, profileImageUrl } = await getUserData(
            comment.userId,
            'get user data in comment service getCommentData' // this is the context to inform where this service get used
        );
        const { userId, ...rest } = comment._doc;
        return {
            ...rest, // rest data from comment obj
            userData: { userId: id, firstName, lastName, profileImageUrl },
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
    async updateComment(commentId, data) {
        const { text } = data;
        try {
            const updated = await Comment.findByIdAndUpdate(
                { _id: commentId },
                { $set: { text, updatedAt: Date.now() } }
            );
            return updated;
        } catch (error) {
            throw new Error(error);
        }
    },
    async deleteComment(commentId) {
        try {
            const deleted = await Comment.findByIdAndDelete(commentId);
            return deleted;
        } catch (error) {
            throw new Error(error);
        }
    },
    async deletePostComments(commentsIds) {
        try {
            const result = await Promise.allSettled(
                commentsIds.map(async (commentId) => {
                    const deleted = await this.deleteComment(commentId);
                    return deleted;
                })
            );
            return result;
        } catch (error) {
            console.log('error in deletePostComments');
            throw new Error('failed to delete all post comments');
        }
    },
};

export default commentServices;
