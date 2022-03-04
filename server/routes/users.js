import express from 'express';
import {
    getOneUser,
    getUsers,
    registerUser,
    updateUser,
    loginUser,
    logoutUser,
    deleteUserAccount,
} from '../controllers/users.js';
import isJsonCheck from '../middlewares/isJson.js';
import isUserLoggedIn from '../middlewares/isLoggedIn.js';
import validateRegisterForm from '../middlewares/validateRegister.js';

const router = express.Router();

router.route('/').get(getUsers);
router.route('/signup').post(isJsonCheck, validateRegisterForm, registerUser);
router.route('/login').post(isJsonCheck, loginUser);
router.route('/logout').get(isUserLoggedIn, logoutUser);
router
    .route('/user')
    .get(isUserLoggedIn, getOneUser)
    .put(updateUser)
    .delete(isUserLoggedIn, deleteUserAccount);

export default router;
