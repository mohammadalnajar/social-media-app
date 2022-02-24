import PropTypes from 'prop-types';
import React from 'react';

const FormButton = ({ title, isLoading }) => {
  return (
    <div className="mt-8">
      <button
        type="submit"
        className={`btn ${
          isLoading && 'loading cursor-not-allowed'
        } w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600`}
      >
        {title}
      </button>
    </div>
  );
};

FormButton.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default FormButton;
