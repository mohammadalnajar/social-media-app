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
        const res = await User.validate({ userName, email, phone, password });
        // console.log(res, 'test');
        // const res = await User.create({ userName, email, phone, password });
        // console.log(res, 'response logged...');
        // if (res) {
        //   console.log('Is registered...');
        // }
    } catch (error) {
        const errorMessage = getErrorMessage(error.message);
        console.log(error, 'error from register route ... ');
        return res.status(400).json({ status: 'failed', errorMessage });
    }
    res.json(req.body);
};
export const updateUser = (req, res) => {
    res.send('update user');
};
