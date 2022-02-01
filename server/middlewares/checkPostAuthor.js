import User from '../models/User.js';
import { errorRes } from '../utils/reqResponse.js';

const checkPostAuthor = async (req, res, next) => {
    const { _id: userId } = req.session.userData;
    const { id: postId } = req.body;
    try {
        const foundUser = await User.findById(userId);
        if (foundUser) {
            const foundPost = foundUser.posts.some((pId) => pId === postId);
            if (foundPost) return next();
            return errorRes(res, 403, 'you are not the author of the post');
        }
        return errorRes(res, 404, 'user was not found in db');
    } catch (error) {
        console.log(error, 'error in check post author');
        return errorRes(res, 500, 'Something went wrong');
    }
};

export default checkPostAuthor;
