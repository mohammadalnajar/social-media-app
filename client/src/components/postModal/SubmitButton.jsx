import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ handleSubmit, isFormFilled, isLoading, method }) => {
  return (
    <div className="modal-action mt-4 px-3">
      <button
        type="button"
        onClick={handleSubmit}
        className={`${
          isLoading() && 'loading cursor-not-allowed'
        } btn btn-block disabled:dark:text-gray-500 text-semibold capitalize text-base disabled:dark:bg-dark-third bg-btn-primary hover:bg-btn-primary-hover border-none`}
        disabled={(!isFormFilled() || isLoading()) && true}
      >
        {method === 'POST' ? 'Post' : 'Save'}
      </button>
    </div>
  );
};
SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isFormFilled: PropTypes.func.isRequired,
  isLoading: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};
export default SubmitButton;
