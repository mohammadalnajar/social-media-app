import React from 'react';
import PropTypes from 'prop-types';

const CommentAvatar = ({ profileImageUrl }) => {
  return (
    <img
      src={profileImageUrl}
      alt="Profile"
      className="w-10 h-10 rounded-full"
    />
  );
};
CommentAvatar.propTypes = {
  profileImageUrl: PropTypes.string.isRequired,
};
export default CommentAvatar;
