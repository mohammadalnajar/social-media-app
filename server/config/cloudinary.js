import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import path from 'path';

const dirname = path.resolve();
dotenv.config({ path: `${dirname}/config/.env` });

const cloud = cloudinary.v2;
cloud.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export default cloud;
