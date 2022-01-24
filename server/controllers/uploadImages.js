import multer from 'multer';

import { v4 as uuidv4 } from 'uuid';
import Post from '../models/Post.js';
import { errorRes, successRes } from '../utils/reqResponse.js';

const uploadImg = (req, res, next) => {
    // const { name, id } = target;
    // let fileName = '';
    // if (name === 'user') {
    //     fileName = `${id}-profile-${uuidv4()}`;
    //     // save user img
    // } else if (name === 'post') {
    //     console.log(id, 'post id');
    //     fileName = `${id}-post-${uuidv4()}`;
    //     // save post img
    // }

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/images');
        },
        filename: function (req, file, cb) {
            console.log(file.originalname);
            const fileName = file.originalname.split('.');
            const extension = fileName[fileName.length - 1];
            cb(null, `${uuidv4()}.${extension}`);
        },
    });
    const upload = multer({ storage });

    const onImageUploadSuccess = async () => {
        // console.log(fileName, 'fileName');
        // try {
        //     const addImageUrlToPost = await Post.findOneAndUpdate(
        //         { _id: createdPost.id },
        //         {
        //             $set: { imageUrl: `/images/${fileName}` },
        //         }
        //     );
        //     // add post id to user posts array
        //     if (addImageUrlToPost) {
        //         // get post data after update
        //         const post = await Post.findById(createdPost.id);
        //         return successRes(res, 200, 'ok', 'post is created', post);
        //     }
        // } catch (error) {
        //     console.log(error, 'error in onImageUploadSuccess');
        //     return errorRes(res, 500, 'something went wrong ...', null, null);
        // }
        // return null;
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

export default uploadImg;
