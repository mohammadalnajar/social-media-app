export const errorRes = (res, statusCode, status, errorMessages, error) =>
    res.status(statusCode).json({ status, errorMessages, error });

export const successRes = (res, statusCode, status, msg, data) =>
    res.status(statusCode).json({ status, msg, data });
