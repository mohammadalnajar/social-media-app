export const authenticateUser = async ({ password, userName }, User, bcrypt) => {
    try {
        let isUserFound = await User.findOne({ userName });
        if (isUserFound) {
            const passMatched = await bcrypt.compare(password, isUserFound.password);
            if (passMatched) {
                isUserFound.password = null;
                return { status: 'success', msg: 'authenticated', data: isUserFound };
            }
            return { status: 'rejected', msg: 'credentials wrong' };
        }
        return { status: 'rejected', msg: 'username was not found' };
    } catch (error) {
        console.log(error, 'catch in user authenticate');
    }
};
