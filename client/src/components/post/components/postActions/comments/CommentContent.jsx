import React from 'react';
import PropTypes from 'prop-types';

const CommentContent = ({ firstName, lastName, text }) => {
  return (
    <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
      <span className="font-semibold block capitalize">
        {firstName} {lastName}
      </span>
      <span>{text}</span>
    </div>
  );
};
CommentContent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default CommentContent;
