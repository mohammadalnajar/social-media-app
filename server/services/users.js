import User from '../models/User.js';

const getUserData = async (userId, context) => {
    try {
        const foundUser = await User.findById(userId);
        if (foundUser) return foundUser;
        return null;
    } catch (error) {
        throw new Error(`failed to get user data during processing ${context}`);
    }
};

export default getUserData;
