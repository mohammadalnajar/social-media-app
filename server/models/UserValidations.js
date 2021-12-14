import { patterns } from '../utils/validationPatterns.js';

const { email, name, phone, password } = patterns;

export const usernameValidations = [
    {
        validator: (val) => name.test(val),
        message: '__error__Please insert only letters ...'
    },
    {
        validator: (val) => val.length < 20,
        message: '__error__A username cannot contains more than 20 characters! ...'
    },
    {
        validator: (val) => val.length > 3,
        message: '__error__A username should contains at least 3 characters!'
    }
];
