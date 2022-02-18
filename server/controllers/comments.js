import Comment from '../models/Comment.js';
import Post from '../models/Post.js';
import { errorRes, successRes } from '../utils/reqResponse.js';

export const getPostComments = async (req, res) => {
    res.send('get comments');
};
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
export const updateComment = async (req, res) => {
    res.send('update comment');
};
export const deleteComment = async (req, res) => {
    res.send('delete comment');
};
