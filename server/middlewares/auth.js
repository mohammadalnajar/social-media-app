const authenticateUser = async ({ password, email }, User, bcrypt) => {
    try {
        const isUserFound = await User.findOne({ email });
        if (isUserFound) {
            const passMatched = await bcrypt.compare(
                password,
                isUserFound.password
            );
            if (passMatched) {
                isUserFound.password = null;
                return {
                    status: 'success',
                    msg: 'authenticated',
                    data: isUserFound,
                };
            }
            return { status: 'rejected', msg: 'credentials wrong' };
        }
        return { status: 'rejected', msg: 'email was not found' };
    } catch (error) {
        console.log(error, 'catch in user authenticate');
    }
    return null;
};
export default authenticateUser;
