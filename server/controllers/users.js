import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { getErrorMessage } from '../utils/mongoErrors.js';

export const getUsers = (req, res) => {
    res.send('get users');
};
export const getOneUser = (req, res) => {
    res.json(req.params.id);
};
export const registerUser = async (req, res) => {
    const { userName, email, phone, password } = req.body;
    const salt = 10;
    try {
        const hashedPass = await bcrypt.hash(password, salt);
        const response = await User.create({ userName, email, phone, password: hashedPass });
        console.log(response);
        res.json(response);
    } catch (error) {
        const errorMessages = getErrorMessage(error);
        return res
            .status(400)
            .json({ status: 'failed to register', errorMessages, errorMsg: error });
    }
};

// ======= Login ==========

export const loginUser = async (req, res) => {
    res.send('login');
};

export const updateUser = (req, res) => {
    res.send('update user');
};
