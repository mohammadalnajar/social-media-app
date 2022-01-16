import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
    },
    visibility: {
        type: String,
        enum: ['only me', 'everyone', 'only friends'],
        required: true,
    },
    likes: { type: Array },
    dislikes: { type: Array },
    comments: { type: Array },
    photos: { type: Array },
});

const Post = mongoose.model('Posts', PostSchema);

export default Post;
