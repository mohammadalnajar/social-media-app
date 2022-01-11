export const errorRes = (res, statusCode, status, errorMessages, error) => {
    return res.status(statusCode).json({ status, errorMessages, error });
};

export const successRes = (res, statusCode, status, msg, data) => {
    return res.status(statusCode).json({ status, msg, data });
};
