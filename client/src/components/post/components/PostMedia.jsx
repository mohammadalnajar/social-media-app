/* eslint-disable react/jsx-no-useless-fragment */
import PropTypes from 'prop-types';
import React from 'react';

const PostMedia = ({ imageUrl }) => {
  return (
    <>
      {imageUrl !== '/images/not-found.jpg' ? (
        <div className="py-2">
          <img src={imageUrl} alt="Post" />
        </div>
      ) : null}
    </>
  );
};

PostMedia.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default PostMedia;
