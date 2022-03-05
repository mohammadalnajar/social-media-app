/* eslint-disable node/no-unsupported-features/es-builtins */
import { deleteImageFormCloud } from '../api/uploadImageToCloud.js';
import Post from '../models/Post.js';
import commentServices from './comments.js';
import userServices from './users.js';

const postServices = {
    async getAllPublicPosts() {
        try {
            const posts = await Post.find({ visibility: 'public' });
            return posts;
        } catch (error) {
            console.log('error in ========== getAllPublicPosts ==========');
            throw new Error(error);
        }
    },
    async getPostById(postId) {
        try {
            const foundPost = await Post.findById(postId);
            return foundPost;
        } catch (error) {
            console.log('error in ========== getPostById ==========');
            throw new Error(error);
        }
    },
    async createPost(data) {
        const { text, visibility, imageUrl, imagePublicId, userId } = data;
        try {
            const createdPost = await Post.create({
                text,
                visibility,
                imageUrl: imageUrl || null,
                imagePublicId: imagePublicId || null,
                userId,
            });
            if (createdPost) {
                // add post id to user posts array
                const updated = await userServices.addPost({
                    userId,
                    postId: createdPost.id,
                });
                if (updated) {
                    return createdPost;
                }
            }
            return null;
        } catch (error) {
            console.log('error in ========== createPost ==========');
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
            console.log('error in ========== addComment ==========');
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
            console.log('error in ========== deleteComment ==========');
            throw new Error(error);
        }
    },
    // this fn gives the user info inside an obj for each like e.g. {userId, firstName, lastName }
    async getPostLikesData(post) {
        try {
            const likesArr = await Promise.allSettled(
                post.likes.map(async (userId) => {
                    const user = await userServices.getUserData(userId);
                    if (user) {
                        return {
                            userId: user._id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                        };
                    }
                    return null;
                })
            );
            const likes = likesArr.map((obj) => obj.value); // to get rid of promise status data
            return { likes };
        } catch (error) {
            console.log('error in ========== getPostLikesData ==========');
            throw new Error(error);
        }
    },
    // this fn gives the user info inside an obj for each dislike e.g. {userId, firstName, lastName }
    async getPostDislikesData(post) {
        try {
            const dislikesArr = await Promise.allSettled(
                post.dislikes.map(async (userId) => {
                    const user = await userServices.getUserData(userId);
                    if (user) {
                        return {
                            userId: user._id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                        };
                    }
                    return null;
                })
            );
            const dislikes = dislikesArr.map((obj) => obj.value); // to get rid of promise status data
            return { dislikes };
        } catch (error) {
            console.log('error in ========== getPostDislikesData ==========');
            throw new Error(error);
        }
    },
    async updatePost({ id: postId, text, visibility }) {
        try {
            const updated = await Post.findByIdAndUpdate(
                { _id: postId },
                { $set: { text, visibility, updatedAt: Date.now() } }
            );
            return updated;
        } catch (error) {
            console.log('error in ========== updatePost ==========');
            throw new Error(error);
        }
    },
    async deletePost(postId) {
        try {
            const deleted = await Post.findByIdAndDelete(postId);
            return deleted;
        } catch (error) {
            console.log('error in ========== deletePost ==========');
            throw new Error(error);
        }
    },
    async deletePostCompletely(postId) {
        try {
            const post = await this.getPostById(postId);
            if (post) {
                if (post.imagePublicId) {
                    const { result } = await deleteImageFormCloud(
                        post.imagePublicId
                    );
                    console.log('delete post image', result);
                }

                if (post.comments.length > 0) {
                    const deletePostComments =
                        await commentServices.deletePostComments(post.comments);
                    console.log(deletePostComments, 'deletePostComments');
                }

                const deleted = await this.deletePost(postId);
                return deleted;
            }
            return null;
        } catch (error) {
            console.log('error in ========== deletePost ==========');
            throw new Error(error);
        }
    },
};

export default postServices;
