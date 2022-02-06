import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '../../utils/helpers';

const PostModalTextArea = ({ text, handleInputChange, firstName }) => {
  return (
    <textarea
      name="text"
      value={text}
      onChange={handleInputChange}
      className="textarea h-24 textarea-ghost p-0 text-xl text-gray-900 dark:text-dark-txt placeholder:text-gray-800 focus:placeholder:text-gray-400 dark:bg-dark-second dark:focus:text-gray-200 dark:placeholder:text-gray-400 dark:focus:placeholder:text-gray-500"
      placeholder={`Whats on your mind, ${capitalize(firstName)}?`}
    />
  );
};

PostModalTextArea.propTypes = {
  firstName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
export default PostModalTextArea;
