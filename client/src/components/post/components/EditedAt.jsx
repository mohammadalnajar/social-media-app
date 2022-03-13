import React from 'react';
import PropTypes from 'prop-types';

const EditedAt = ({ editedAt }) => {
  return (
    <div
      data-tip={`edited at ${editedAt}`}
      className="tooltip tooltip-bottom ml-2 text-sm underline dark:hover:text-dark-txt cursor-pointer text-gray-500"
    >
      edited
    </div>
  );
};
EditedAt.propTypes = {
  editedAt: PropTypes.string.isRequired,
};
export default EditedAt;
