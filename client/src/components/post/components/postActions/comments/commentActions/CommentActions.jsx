import React from 'react';
import PropTypes from 'prop-types';

const CommentActions = ({ children }) => {
  return (
    <div className="flex items-center px-2 pt-1 text-xs text-gray-500 dark:text-dark-txt">
      {children}
    </div>
  );
};
CommentActions.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CommentActions;
