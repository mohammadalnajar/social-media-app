const getImagePublicId = (url, folder) => {
    let publicId = url.split(folder)[1].split('.')[0];
    publicId = folder + publicId;
    return publicId;
};

export default getImagePublicId;
