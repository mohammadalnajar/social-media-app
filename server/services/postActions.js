import User from '../models/User.js';

// ========= get likesData (post) =========

// this fn gives the user info inside an obj for each like e.g. {userId, firstName, lastName }
export const getLikesData = async (post) => {
    try {
        const likesArr = await Promise.allSettled(
            post.likes.map(async (userId) => {
                const user = await User.findById(userId);
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
        throw new Error('get likes data failed ...');
    }
};

// ========= get dislikesData (post) =========

// this fn gives the user info inside an obj for each dislike e.g. {userId, firstName, lastName }
export const getDislikesData = async (post) => {
    try {
        const dislikesArr = await Promise.allSettled(
            post.dislikes.map(async (userId) => {
                const user = await User.findById(userId);
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
        throw new Error('get dislikes data failed ...');
    }
};
