export const getErrorMessage = (message) => {
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

    return messagesArray;
};
