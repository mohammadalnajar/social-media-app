/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import {
    deleteImageFormCloud,
    uploadImageToCloud,
} from '../api/uploadImageToCloud.js';
import Post from '../models/Post.js';
import User from '../models/User.js';
import commentServices from '../services/comments.js';
import postServices from '../services/posts.js';
import userServices from '../services/users.js';
import sortPostsByDate from '../utils/helpers.js';
import { errorRes, successRes } from '../utils/reqResponse.js';

// ========= get ALL posts (everyone) =========
export const getAllUsersPosts = async (req, res) => {
    try {
        const posts = await postServices.getAllPublicPosts();
        if (posts && posts.length > 0) {
            const data = await Promise.all(
                posts.map(async (post) => {
                    const {
                        _id: userId,
                        firstName,
                        lastName,
                        profileImageUrl,
                    } = await userServices.getUserData(post.userId);
                    const { likes } = await postServices.getPostLikesData(post);
                    const { dislikes } = await postServices.getPostDislikesData(
                        post
                    );
                    const { commentsData: comments } =
                        await commentServices.getPostComments(post.comments);
                    return {
                        ...post._doc,
                        likes,
                        dislikes,
                        comments,
                        authorData: {
                            userId,
                            firstName,
                            lastName,
                            profileImageUrl,
                        },
                    };
                })
            );
            const sortedPosts = sortPostsByDate(data);
            return successRes(res, 200, 'ok', 'posts found', {
                posts: sortedPosts,
            });
        }
        return errorRes(res, 404, 'no posts found');
    } catch (error) {
        console.log(error, 'error with getting all users posts ...');
        return errorRes(res, 500, 'failed to get users posts');
    }
};
// ========= get ALL posts (friends) =========
export const getAllFriendsPosts = (req, res) => {
    res.send('getAllFriendsPosts');
};
// ========= get ALL posts (user) =========
export const getAllUserPosts = async (req, res) => {
    const { _id: userId } = req.session.userData;
    const user = await userServices.getUserData(userId);
    const posts = await Promise.all(
        user.posts.map(async (postId) => {
            try {
                const post = await postServices.getPostById(postId);
                return post;
            } catch (error) {
                console.log(error, 'in get posts');
                return errorRes(
                    res,
                    500,
                    'failed to get user posts ...',
                    null,
                    null
                );
            }
        })
    );
    const data = posts;
    return successRes(res, 200, 'ok', 'all user posts found', data);
};
// ========= create a post =========
export const createPost = async (req, res) => {
    // get userId from session
    const { _id: userId } = req.session.userData;

    // create post
    const { text, visibility, imageUrl, imagePublicId } = req.body;
    try {
        const postCreated = await postServices.createPost({
            text,
            visibility,
            imageUrl,
            imagePublicId,
            userId,
        });
        if (postCreated) {
            // get post data after update
            const post = await postServices.getPostById(postCreated.id);
            const data = post;
            return successRes(res, 200, 'ok', 'post is created', data);
        }
        return errorRes(
            res,
            400,
            'failed to add the post created to the user ...',
            null,
            null
        );
    } catch (error) {
        console.log(error, 'error in create post ...');
        return errorRes(res, 500, 'server error');
    }
};
export const createPostWithImages = async (req, res, next) => {
    const { imageData } = req.body;
    try {
        if (imageData) {
            const { secure_url, public_id } = await uploadImageToCloud(
                imageData
            );
            if (public_id) {
                req.body.imageUrl = secure_url;
                req.body.imagePublicId = public_id;
                return next();
            }
        }
        return next();
    } catch (error) {
        console.log(error, 'error in create post with images ...');
        return errorRes(res, 500, 'server error');
    }
};
// ========= update a post =========
export const updatePost = async (req, res) => {
    const { id: postId, text, visibility } = req.body;
    try {
        const updated = await Post.findByIdAndUpdate(
            { _id: postId },
            { $set: { text, visibility, updatedAt: Date.now() } }
        );
        if (updated) {
            const updatedPost = await Post.findById(postId);
            if (updatedPost)
                return successRes(res, 200, 'ok', 'post is updated');
        }
        return errorRes(res, 404, 'post was not found', null, null);
    } catch (error) {
        console.log(error, 'error in update post');
        return errorRes(res, 500, 'failed to update post', null, null);
    }
};
// ========= delete a post =========
export const deletePost = async (req, res) => {
    const { _id: userId } = req.session.userData;
    const { id: postId } = req.body;
    try {
        const postFound = await Post.findById(postId);
        if (postFound) {
            // check if post has an image
            let imageDeleted;
            if (postFound.imagePublicId) {
                const { result } = await deleteImageFormCloud(
                    postFound.imagePublicId
                );
                if (result === 'ok') imageDeleted = 'deleted';
            } else {
                imageDeleted = 'no-need';
            }
            if (imageDeleted === 'deleted' || imageDeleted === 'no-need') {
                const deleted = await Post.findByIdAndDelete(postId);
                if (deleted) {
                    const updateUserPostsArray = await User.findByIdAndUpdate(
                        { _id: userId },
                        { $pull: { posts: postId } }
                    );
                    if (updateUserPostsArray) {
                        await commentServices.deletePostComments(
                            postFound.comments
                        );
                        return successRes(
                            res,
                            200,
                            'ok',
                            'post is completely deleted ...'
                        );
                    }
                    return errorRes(
                        res,
                        404,
                        'failed to delete post from user schema ...',
                        null,
                        null
                    );
                }
                return errorRes(res, 404, 'failed to delete post from schema');
            }
            return errorRes(res, 404, 'failed to delete image from cloud');
        }
        return errorRes(
            res,
            404,
            'post not found and failed to delete from user schema ...',
            null,
            null
        );
    } catch (error) {
        return errorRes(res, 500, 'failed to delete post ...', null, error);
    }
};

// ========= like or unlike a post =========
export const likePost = async (req, res) => {
    const { like } = req.body;
    const { postId } = req.params;

    const { _id: userId } = req.session.userData;
    try {
        if (like) {
            // like a post
            const updated = await Post.findOneAndUpdate(
                { _id: postId },
                {
                    $push: { likes: userId },
                }
            );
            if (updated) {
                return successRes(res, 200, 'ok', 'post is liked by the user');
            }
            return errorRes(
                res,
                404,
                'post is not found or failed to update...'
            );
        }
        // unlike a post
        const updated = await Post.findOneAndUpdate(
            { _id: postId },
            {
                $pull: { likes: userId },
            }
        );
        if (updated) {
            return successRes(res, 200, 'ok', 'post is unliked by the user');
        }
        return errorRes(res, 404, 'post is not found or failed to update...');
    } catch (error) {
        return errorRes(
            res,
            500,
            'failed to like or unlike a post ...',
            null,
            error
        );
    }
};

// ========= dislike or un dislike a post =========
export const dislikePost = async (req, res) => {
    const { dislike } = req.body;
    const { postId } = req.params;
    const { _id: userId } = req.session.userData;
    try {
        if (dislike) {
            // dislike a post
            const updated = await Post.findOneAndUpdate(
                { _id: postId },
                {
                    $push: { dislikes: userId },
                }
            );
            if (updated) {
                return successRes(
                    res,
                    200,
                    'ok',
                    'post is disliked by the user'
                );
            }
            return errorRes(
                res,
                404,
                'post is not found or failed to update...'
            );
        }
        // un dislike a post
        const updated = await Post.findOneAndUpdate(
            { _id: postId },
            {
                $pull: { dislikes: userId },
            }
        );
        if (updated) {
            return successRes(
                res,
                200,
                'ok',
                'post is un disliked by the user'
            );
        }
        return errorRes(res, 404, 'post is not found or failed to update...');
    } catch (error) {
        return errorRes(
            res,
            500,
            'failed to like or unlike a post ...',
            null,
            error
        );
    }
};

// ========= get likes for a post =========

export const getPostLikes = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        if (post) {
            const { likes } = await postServices.getPostLikesData(post);
            return successRes(res, 200, 'ok', 'likes data found ...', {
                likes,
            });
        }
        return errorRes(res, 404, 'post is not found ...');
    } catch (error) {
        return errorRes(
            res,
            500,
            'failed to get all likes of a post ...',
            null,
            error
        );
    }
};

// ========= get dislikes for a post =========
export const getPostDislikes = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        if (post) {
            const { dislikes } = await postServices.getPostDislikesData(post);
            return successRes(res, 200, 'ok', 'dislikes data found ...', {
                dislikes,
            });
        }
        return errorRes(res, 404, 'post is not found ...');
    } catch (error) {
        return errorRes(
            res,
            500,
            'failed to get all dislikes of a post ...',
            null,
            error
        );
    }
};
