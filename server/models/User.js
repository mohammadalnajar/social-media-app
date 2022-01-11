import mongoose from 'mongoose';
import { emailValidations, passwordValidations, usernameValidations } from './UserValidations.js';

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, '__error__Please fill in a username!__error_end__'],
        unique: [true, '__error__Sorry, but this username is already registered...__error_end__'],
        validate: usernameValidations
    },
    email: {
        type: String,
        required: true,
        unique: [
            true,
            '__error__Sorry, but this email address is already registered...__error_end__'
        ],
        validate: emailValidations
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    followers: {
        type: Array
    },
    followings: {
        type: Array
    }
});

const User = mongoose.model('Users', UserSchema);

export default User;
