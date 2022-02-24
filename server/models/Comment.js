import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
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

    likes: [{ type: String }],
    dislikes: [{ type: String }],
    comments: [{ type: String }],
    photos: { type: Array },
    imageUrl: { type: String },
    imagePublicId: { type: String },
    userId: { type: String, required: true },
    postId: { type: String, required: true },
});

const Comment = mongoose.model('comments', CommentSchema);

export default Comment;
