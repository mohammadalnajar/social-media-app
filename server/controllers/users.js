import bcrypt from 'bcrypt';
import User from '../models/User.js';
import getErrorMessage from '../utils/mongoErrors.js';
import { errorRes, successRes } from '../utils/reqResponse.js';
import authenticateUser from '../middlewares/auth.js';

export const getUsers = (req, res) => {
    res.send('get users');
};
export const getOneUser = (req, res) => {
    const { userData } = req.session;
    return successRes(res, 200, 'ok', 'user is logged in', userData);
};
export const registerUser = async (req, res) => {
    const { userName, email, phone, password, firstName, lastName } = req.body;
    const salt = 10;
    try {
        const hashedPass = await bcrypt.hash(password, salt);
        const userCreated = await User.create({
            userName,
            email,
            phone,
            password: hashedPass,
            firstName,
            lastName,
        });
        const { password: pass, isAdmin, ...rest } = userCreated._doc;
        if (userCreated.email) {
            req.session.userData = rest; // storing session containing user data
        }
        return successRes(res, 200, 'ok', 'account is created ...', rest);
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

// ======= Login ==========

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

export const updateUser = (req, res) => {
    res.send('update user');
};
