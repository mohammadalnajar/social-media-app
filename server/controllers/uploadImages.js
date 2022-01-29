/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable object-shorthand */
import multer from 'multer';

import { v4 as uuidv4 } from 'uuid';
import { uploadImageToCloud } from '../api/uploadImageToCloud.js';
import { errorRes, successRes } from '../utils/reqResponse.js';

// =========== LOCAL ===========

export const uploadImg = (req, res, next) => {
    let filename = '';
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/images');
        },
        filename: function (req, file, cb) {
            const fileName = file.originalname.split('.');
            const extension = fileName[fileName.length - 1];
            filename = `${uuidv4()}.${extension}`;
            cb(null, filename);
        },
    });
    const upload = multer({ storage });

    const onImageUploadSuccess = async () => {
        console.log('upload');
        return successRes(res, 200, 'ok', 'image is saved', {
            imageUrl: `/images/${filename}`,
        });
    };
    const onImageUploadFail = (err) => {
        console.log(err, 'onImageUploadFail func error');
        return errorRes(res, 500, 'failed to upload the image', null, null);
    };
    return upload.single('file')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            console.log(' A Multer error occurred when uploading');
            return onImageUploadFail(err);
        }
        if (err) {
            console.log(err, 'An unknown error occurred when uploading');
            return onImageUploadFail(err);
            // An unknown error occurred when uploading.
        }
        console.log('done');
        return onImageUploadSuccess();
        // Everything went fine.
    });
};

// =========== CLOUD ===========

export const uploadImgCloud = async (req, res) => {
    // https://stackoverflow.com/questions/19917401/error-request-entity-too-large
    try {
        const { secure_url } = await uploadImageToCloud(req.body.data);
        const imageUrl = secure_url;
        return successRes(res, 200, 'ok', 'image is uploaded', { imageUrl });
    } catch (error) {
        console.log(error, 'error in uploading image');
        return errorRes(res, 500, 'some error occurred');
    }
};
