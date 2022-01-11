export const errorRes = (res, statusCode, status, errorMessages, error) => {
    return res
        .status(statusCode)
        .json({ status: status, errorMessages: errorMessages, error: error });
};

export const successRes = (res, statusCode, status, msg, data) => {
    return res.status(statusCode).json({ status: status, msg: msg, data: data });
};
