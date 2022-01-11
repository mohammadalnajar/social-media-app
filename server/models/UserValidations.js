import { patterns } from '../utils/validationPatterns.js';

const { email, name, phone, password } = patterns;
const { lowercaseLetter, uppercaseLetter, numbers, specialCharacters, min } = password;
export const usernameValidations = [
    // {
    //     validator: (val) => name.test(val),
    //     message: '__error__Please insert only letters ...__error_end__'
    // },
    {
        validator: (val) => val.length < 20,
        message: '__error__A username cannot contains more than 20 characters! ...__error_end__'
    },
    {
        validator: (val) => val.length > 3,
        message: '__error__A username should contains at least 3 characters!__error_end__'
    }
];

export const emailValidations = [
    {
        validator: (val) => email.test(val),
        message: '__error__Please insert a valid email address ...__error_end__'
    }
];

export const passwordValidations = [
    {
        validator: (val) => lowercaseLetter.test(val),
        message: '__error__Please insert at least one lowercase letter ...__error_end__'
    },
    {
        validator: (val) => uppercaseLetter.test(val),
        message: '__error__Please insert at least one uppercase letter ...__error_end__'
    },
    {
        validator: (val) => numbers.test(val),
        message: '__error__Please insert at least one number ...__error_end__'
    },
    {
        validator: (val) => specialCharacters.test(val),
        message: '__error__Please insert at least one special characters ...__error_end__'
    },
    {
        validator: (val) => min.test(val),
        message: '__error__Please insert minimal 8 characters ...__error_end__'
    }
];
