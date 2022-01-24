import express from 'express';
import uploadImg from '../controllers/uploadImages.js';
import isUserLoggedIn from '../middlewares/isLoggedIn.js';

const router = express.Router();

router.route('/').post(isUserLoggedIn, uploadImg);

export default router;
