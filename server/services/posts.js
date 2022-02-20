import Post from '../models/Post.js';

const postServices = {
    async getPostById(postId) {
        try {
            const foundPost = await Post.findById(postId);
            return foundPost;
        } catch (error) {
            throw new Error(error);
        }
    },
};

export default postServices;
