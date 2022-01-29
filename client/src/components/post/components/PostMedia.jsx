import PropTypes from 'prop-types';
import React from 'react';

const PostMedia = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className="py-2">
      <img src={imageUrl} alt="Post" />
    </div>
  );
};

PostMedia.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default PostMedia;
