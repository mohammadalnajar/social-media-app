import express from 'express';
import { getOneUser, getUsers, registerUser, updateUser } from '../controllers/users.js';

export const router = express.Router();

router.route('/').get(getUsers).post(registerUser);
router.route('/:id').get(getOneUser).put(updateUser);
