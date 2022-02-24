import PropTypes from 'prop-types';
import React from 'react';

const Post = ({ children }) => {
  return (
    <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
      {children}
    </div>
  );
};

Post.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Post;
