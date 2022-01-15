import {
    emailValidations,
    nameValidations,
    passwordValidations,
} from '../models/UserValidations.js';
import getErrorMessage from '../utils/mongoErrors.js';
import { errorRes } from '../utils/reqResponse.js';

const validatePatterns = (patterns, val, field) => {
    let array = [];
    patterns.forEach((pattern) => {
        if (!pattern.validator(val)) {
            array.push(pattern.message);
        }
    });
    array = getErrorMessage({ message: array.join('') });
    return { field, messagesArray: array };
};

const validateRegisterForm = (req, res, next) => {
    const data = req.body;
    const { firstName, lastName, email, password } = data;
    const validations = [
        {
            validation: passwordValidations,
            value: password,
            field: 'password',
        },
        { validation: emailValidations, value: email, field: 'email' },
        { validation: nameValidations, value: firstName, field: 'firstName' },
        { validation: nameValidations, value: lastName, field: 'lastName' },
    ];
    let messagesArray = [];
    validations.forEach(({ validation, value, field }) =>
        messagesArray.push(validatePatterns(validation, value, field))
    );

    messagesArray = messagesArray.filter((obj) => {
        if (obj.messagesArray.length > 0) {
            return obj;
        }
        return null;
    });
    if (messagesArray.length > 0) {
        return errorRes(
            res,
            400,
            'failed to register',
            messagesArray,
            'validation error'
        );
    }
    return next();
};
export default validateRegisterForm;
