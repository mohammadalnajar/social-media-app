import mongoose from 'mongoose';
import { usernameValidations } from './UserValidations.js';

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, '__error__Please fill in a username!'],
        unique: [true, '__error__Sorry, but this username is already registered...'],
        validate: usernameValidations
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        mix: 50
    },
    password: {
        type: String,
        required: true,
        min: 6
    }
});

const User = mongoose.model('Users', UserSchema);

export default User;
