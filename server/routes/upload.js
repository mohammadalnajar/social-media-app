import express from 'express';
import { uploadImg, uploadImgCloud } from '../controllers/uploadImages.js';
import isJsonCheck from '../middlewares/isJson.js';
import isUserLoggedIn from '../middlewares/isLoggedIn.js';

const router = express.Router();

router.route('/').post(isUserLoggedIn, uploadImg);
router.route('/cloud').post(isUserLoggedIn, isJsonCheck, uploadImgCloud);

export default router;
