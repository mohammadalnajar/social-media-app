import fetch from 'node-fetch';

const getAvatar = async (email) => {
    const res = await fetch(`https://robohash.org/${email}`);
    const data = await res.buffer();
    const b64 = data.toString('base64');
    return b64;
};

export default getAvatar;

// https://stackoverflow.com/questions/54099802/blob-to-base64-in-nodejs-without-filereader
// https://stackoverflow.com/questions/34158497/convert-blob-data-to-raw-buffer-in-javascript-or-node
// https://stackoverflow.com/questions/18650168/convert-blob-to-base64
