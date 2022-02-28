import User from '../models/User.js';

const userServices = {
    async getUserData(userId) {
        try {
            const foundUser = await User.findById(userId);
            if (foundUser) return foundUser;
            return null;
        } catch (error) {
            console.log('error in get user data');
            throw new Error(error);
        }
    },
    async addPost({ userId, postId }) {
        try {
            const updated = await User.findOneAndUpdate(
                { _id: userId },
                {
                    $push: { posts: postId },
                }
            );
            return updated;
        } catch (error) {
            console.log('error in ========== addPost ==========');
            throw new Error(error);
        }
    },
};

export default userServices;
