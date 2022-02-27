import Post from '../models/Post.js';

const postServices = {
    async getAllPublicPosts() {
        try {
            const posts = await Post.find({ visibility: 'public' });
            return posts;
        } catch (error) {
            console.log('error in getAllPublicPosts');
            throw new Error(error);
        }
    },
    async getPostById(postId) {
        try {
            const foundPost = await Post.findById(postId);
            return foundPost;
        } catch (error) {
            throw new Error(error);
        }
    },

    async addComment(postId, createdComment) {
        try {
            const updatedPost = await Post.findOneAndUpdate(
                { _id: postId },
                { $push: { comments: createdComment.id } }
            );
            return updatedPost;
        } catch (error) {
            throw new Error(error);
        }
    },
    async deleteComment(postId, commentId) {
        try {
            const updatePostComments = await Post.findByIdAndUpdate(
                {
                    _id: postId,
                },
                { $pull: { comments: commentId } }
            );
            return updatePostComments;
        } catch (error) {
            throw new Error(error);
        }
    },
};

export default postServices;
