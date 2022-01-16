import { errorRes } from '../utils/reqResponse.js';

const isJsonCheck = (req, res, next) => {
    if (!req.is('application/json')) {
        return errorRes(
            res,
            400,
            'content-type should be application/json ... ',
            null,
            null
        );
    }
    return next();
};

export default isJsonCheck;
