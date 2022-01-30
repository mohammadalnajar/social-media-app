import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    visibility: {
        type: String,
        enum: ['only me', 'public', 'friends'],
        required: true,
    },
    likes: { type: Array },
    dislikes: { type: Array },
    comments: { type: Array },
    photos: { type: Array },
    imageUrl: { type: String, default: '/images/not-found.jpg' },
});

const Post = mongoose.model('Posts', PostSchema);

export default Post;
