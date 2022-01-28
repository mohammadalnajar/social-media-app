import fetch from 'node-fetch';

const getAvatar = async (email) => {
    const res = await fetch(`https://robohash.org/${email}`);
    const data = await res.buffer();
    const b64 = data.toString('base64');
    return b64;
};

export default getAvatar;
