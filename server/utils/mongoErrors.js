export const getErrorMessage = (message) => {
    const array = message.split('__error__');
    return array[1];
};
