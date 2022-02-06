/* eslint-disable react/jsx-no-useless-fragment */
import PropTypes from 'prop-types';
import React from 'react';

const PostMedia = ({ imageUrl }) => {
  return (
    <>
      {imageUrl && (
        <div className="py-2">
          <img src={imageUrl} alt="Post" />
        </div>
      )}
    </>
  );
};

PostMedia.propTypes = {
  imageUrl: PropTypes.string,
};
PostMedia.defaultProps = {
  imageUrl: null,
};
export default PostMedia;
