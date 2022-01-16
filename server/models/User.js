import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    firstName: { type: String },
    lastName: { type: String },
    email: {
        type: String,
        required: true,
        unique: [
            true,
            '__error__Sorry, but this email address is already registered...__error_end__',
        ],
    },
    password: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    updated_at: {
        type: Date,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    followers: {
        type: Array,
    },
    followings: {
        type: Array,
    },
});

const User = mongoose.model('Users', UserSchema);

export default User;
