import { errorRes } from '../utils/reqResponse.js';

const isUserLoggedIn = (req, res, next) => {
    if (req.session.userData) {
        return next();
    }
    return errorRes(res, 404, 'not authenticated', null, null);
};

export default isUserLoggedIn;
