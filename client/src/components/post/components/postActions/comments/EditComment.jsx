import React from 'react';
import PropTypes from 'prop-types';

const EditComment = ({ toggleEdit }) => {
  return (
    <div>
      <span>edit component</span>

      <button
        type="button"
        onClick={toggleEdit}
        className="hover:underline hover:text-blue-500 text-blue-600"
      >
        cancel
      </button>
    </div>
  );
};
EditComment.propTypes = {
  toggleEdit: PropTypes.func.isRequired,
};
export default EditComment;
