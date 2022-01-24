import multer from 'multer';

import { v4 as uuidv4 } from 'uuid';

const uploadImg = (target, req, res, onSuccess, onFail) => {
    const { name, id } = target;
    let fileName = '';
    if (name === 'user') {
        fileName = `${id}-profile-${uuidv4()}`;
        // save user img
    } else if (name === 'post') {
        console.log(id, 'post id');
        fileName = `${id}-post-${uuidv4()}`;
        // save post img
    }

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/images');
        },
        filename: function (req, file, cb) {
            cb(null, `${fileName}-${file.originalname}`);
        },
    });
    const upload = multer({ storage });

    return upload.single('file')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            console.log(' A Multer error occurred when uploading');
            return onFail(err);
        }
        if (err) {
            console.log(err, 'An unknown error occurred when uploading');
            return onFail(err);
            // An unknown error occurred when uploading.
        }
        console.log('done');
        return onSuccess(fileName);
        // Everything went fine.
    });
};

export default uploadImg;
