import express from 'express';
import { getOneUser, getUsers, registerUser, updateUser, loginUser } from '../controllers/users.js';

export const router = express.Router();

router.route('/').get(getUsers);
router.route('/signup').post(registerUser);
router.route('/signin').post(loginUser);
router.route('/:id').get(getOneUser).put(updateUser);
