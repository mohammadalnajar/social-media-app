import Post from '../models/Post.js';
import User from '../models/User.js';
import { errorRes, successRes } from '../utils/reqResponse.js';

// ========= get ALL posts (everyone) =========
export const getAllUsersPosts = (req, res) => {
    res.send('getAllUsersPosts');
};
// ========= get ALL posts (friends) =========
export const getAllFriendsPosts = (req, res) => {
    res.send('getAllFriendsPosts');
};
// ========= get ALL posts (user) =========
export const getAllUserPosts = async (req, res) => {
    const { _id: userId } = req.session.userData;
    const user = await User.findById(userId);
    const posts = await Promise.all(
        user.posts.map(async (postId) => {
            try {
                const post = await Post.findById(postId);
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
    console.log(req.body, 'body');
    // get userId from session
    const { _id: userId } = req.session.userData;

    // create post
    const { text, visibility, imageUrl } = req.body;
    try {
        const createdPost = await Post.create({
            text,
            visibility,
            imageUrl,
        });
        if (createdPost) {
            // const onImageUploadSuccess = async (fileName) => {
            //     console.log(fileName, 'fileName');
            //     try {
            //         const addImageUrlToPost = await Post.findOneAndUpdate(
            //             { _id: createdPost.id },
            //             {
            //                 $set: { imageUrl: `/images/${fileName}` },
            //             }
            //         );
            //         // add post id to user posts array
            //         const updated = await User.findOneAndUpdate(
            //             { _id: userId },
            //             {
            //                 $push: { posts: createdPost.id },
            //             }
            //         );
            //         if (updated && addImageUrlToPost) {
            //             // get post data after update
            //             const post = await Post.findById(createdPost.id);
            //             return successRes(
            //                 res,
            //                 200,
            //                 'ok',
            //                 'post is created',
            //                 post
            //             );
            //         }
            //     } catch (error) {
            //         console.log(error, 'error in onImageUploadSuccess');
            //         return errorRes(
            //             res,
            //             500,
            //             'something went wrong ...',
            //             null,
            //             null
            //         );
            //     }
            //     return null;
            // };
            // const onImageUploadFail = (err) => {
            //     console.log(err, 'onImageUploadFail func error');
            //     return errorRes(
            //         res,
            //         500,
            //         'failed to upload the image',
            //         null,
            //         null
            //     );
            // };
            // if (req.file) {
            //     uploadImg(
            //         { name: 'post', id: createdPost.id },
            //         req,
            //         res,
            //         onImageUploadSuccess,
            //         onImageUploadFail
            //     );
            // }

            // add post id to user posts array
            const updated = await User.findOneAndUpdate(
                { _id: userId },
                {
                    $push: { posts: createdPost.id },
                }
            );
            if (updated) {
                // get post data after update
                const post = await Post.findById(createdPost.id);
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
        }
        return errorRes(res, 400, 'failed to create a post ...', null, null);
    } catch (error) {
        console.log(error, 'error in create post ...');
        return errorRes(res, 500, 'server error');
    }
};
// ========= update a post =========
export const updatePost = (req, res) => {
    res.send('update post');
};
// ========= delete a post =========
export const deletePost = (req, res) => {
    res.send('delete post');
};
