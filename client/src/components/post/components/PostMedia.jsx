/* eslint-disable react/jsx-no-useless-fragment */
import PropTypes from 'prop-types';
import React from 'react';

const PostMedia = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <>
      {imageUrl !== null && (
        <div className="py-2">
          <img src={imageUrl} alt="Post" className="w-full" />
        </div>
      )}
    </>
  );
};

PostMedia.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default PostMedia;
