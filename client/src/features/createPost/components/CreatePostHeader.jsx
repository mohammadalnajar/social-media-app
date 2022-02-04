import PropTypes from 'prop-types';
import React from 'react';

const CreatePostHeader = ({ toggleModal, title }) => {
  return (
    <div className="flex flex-nowrap px-3">
      <h1 className="flex-1 text-center text-xl text-gray-900 dark:text-dark-txt font-bold">
        {title}
      </h1>
      <button
        type="button"
        onClick={toggleModal}
        className="btn btn-circle btn-sm bg-gray-300 dark:bg-dark-third hover:bg-gray-400 dark:hover:bg-dark-hover border-none"
      >
        <i className="bx bx-x text-2xl text-gray-500 dark:text-dark-txt" />
      </button>
    </div>
  );
};

CreatePostHeader.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CreatePostHeader;
