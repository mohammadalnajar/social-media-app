import express from 'express';
import { uploadImg, uploadImgCloud } from '../controllers/uploadImages.js';
import isUserLoggedIn from '../middlewares/isLoggedIn.js';

const router = express.Router();

router.route('/').post(isUserLoggedIn, uploadImg);
router.route('/cloud').post(isUserLoggedIn, uploadImgCloud);

export default router;
