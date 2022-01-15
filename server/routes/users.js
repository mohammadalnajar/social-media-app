import express from 'express';
import {
    getOneUser,
    getUsers,
    registerUser,
    updateUser,
    loginUser,
} from '../controllers/users.js';
import validateRegisterForm from '../middlewares/validateRegister.js';

const router = express.Router();

router.route('/').get(getUsers);
router.route('/signup').post(validateRegisterForm, registerUser);
router.route('/signin').post(loginUser);
router.route('/:id').get(getOneUser).put(updateUser);

export default router;
