/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import cloud from '../config/cloudinary.js';

export const uploadImageToCloud = async (fileStr) => {
    const uploadedRes = await cloud.uploader.upload(fileStr, {
        upload_preset: 'social-media-app',
    });
    return uploadedRes;
};
