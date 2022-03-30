/* eslint-disable node/no-unsupported-features/es-builtins */
/* eslint-disable camelcase */
import bcrypt from 'bcrypt';
import {
    deleteImageFormCloud,
    uploadImageToCloud,
} from '../api/uploadImageToCloud.js';
import User from '../models/User.js';
import getErrorMessage from '../utils/mongoErrors.js';
import { errorRes, successRes } from '../utils/reqResponse.js';
import authenticateUser from '../middlewares/auth.js';
import getAvatar from '../api/getRandomAvatar.js';
import userServices from '../services/users.js';
import postServices from '../services/posts.js';

export const getUsers = (req, res) => {
    res.send('get users');
};
export const getOneUser = (req, res) => {
    const { userData } = req.session;
    return successRes(res, 200, 'ok', 'user is logged in', userData);
};

// ======= Sign up ==========

export const registerUser = async (req, res) => {
    const { userName, email, phone, password, firstName, lastName } = req.body;
    const salt = 10;

    try {
        const hashedPass = await bcrypt.hash(password, salt);
        const fileStr = await getAvatar(email);
        const { secure_url: profileImageUrl, public_id: profileImagePublicId } =
            await uploadImageToCloud(fileStr);
        if (profileImageUrl) {
            const userCreated = await User.create({
                userName,
                email,
                phone,
                password: hashedPass,
                firstName,
                lastName,
                profileImageUrl,
                profileImagePublicId,
            });
            const { password: pass, isAdmin, ...rest } = userCreated._doc;
            if (userCreated.email) {
                req.session.userData = rest; // storing session containing user data
            }
            return successRes(res, 200, 'ok', 'account is created ...', rest);
        }
        return errorRes(res, 500, 'failed to get avatar image');
    } catch (error) {
        console.log(error, 'error in register route ...');
        return errorRes(
            res,
            400,
            'failed to register',
            getErrorMessage(error),
            error
        );
    }
};

// ======= login ==========

export const loginUser = async (req, res) => {
    try {
        if (req.body.email) {
            const { status, msg, data } = await authenticateUser(
                req.body,
                User,
                bcrypt
            );

            if (status === 'success') {
                req.session.userData = data; // storing session containing user data
                return successRes(res, 200, 'ok', msg, data);
            }
            if (status === 'rejected') {
                return errorRes(res, 400, status, null, msg);
            }
        }
        return errorRes(res, 400, 'data is not received well ...');
    } catch (error) {
        console.log(error, 'error in login route ...');
        return errorRes(res, 500, 'Failed to login...', null, null);
    }
};

// ======= logout ==========
export const logoutUser = (req, res) => {
    req.session.destroy();
    return successRes(res, 200, 'ok', 'user is logged out', null);
};
export const updateUser = (req, res) => {
    res.send('update user');
};

export const deleteUserAccount = async (req, res) => {
    const { _id: userId } = req.session.userData;
    try {
        const user = await userServices.getUserData(userId);
        if (user) {
            // delete all posts
            const postsDeleted = await Promise.allSettled(
                user.posts.map(async (postId) => {
                    const postDeleted = await postServices.deletePostCompletely(
                        postId
                    );
                    return postDeleted;
                })
            );
            if (postsDeleted) {
                // delete profile image
                const { result } = await deleteImageFormCloud(
                    user.profileImagePublicId
                );
                console.log('delete user profile image', result);
                // delete user doc
                const userDeleted = await userServices.deleteUserAccount(
                    userId
                );
                if (userDeleted) {
                    return successRes(
                        res,
                        200,
                        'ok',
                        'user account was deleted ... '
                    );
                }
            }
        }
        return errorRes(res, 404, 'account was not found');
    } catch (error) {
        console.log(error, 'error in deleteUserAccount route ...');
        return errorRes(
            res,
            500,
            'Failed to delete User Account...',
            null,
            null
        );
    }
};
