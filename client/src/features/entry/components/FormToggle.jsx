import PropTypes from 'prop-types';
import React from 'react';

const FormToggle = ({ title, toggleForm }) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
      <button
        onClick={toggleForm}
        type="button"
        className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
      >
        {title}
      </button>
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
    </div>
  );
};

FormToggle.propTypes = {
  title: PropTypes.string.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default FormToggle;
