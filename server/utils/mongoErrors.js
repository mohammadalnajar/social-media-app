export const getErrorMessage = (error) => {
    const { message } = error;
    const messagesArray = message
        .split('__error__')
        .filter((el) => el.includes('__error_end__'))
        .map((el) => {
            if (el.includes('__error_end__,')) {
                const msg = el.split('__error_end__,');
                return msg[0];
            } else {
                const msg = el.split('__error_end__');
                return msg[0];
            }
        });
    ['email', 'userName'].forEach((field) => {
        if (error.code === 11000 && error.keyPattern[field]) {
            messagesArray.push(`${field} should be unique ... `);
        }
    });
    return messagesArray;
};
