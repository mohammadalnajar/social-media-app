import axios from 'axios';

const getAvatar = async (email) => {
    const res = await axios.get(`https://robohash.org/${email}`);
    return res;
};

export default getAvatar;
