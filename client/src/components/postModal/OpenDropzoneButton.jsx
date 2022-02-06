import React from 'react';
import PropTypes from 'prop-types';

const OpenDropzoneButton = ({ setShowDropzone, showDropzone, setFiles }) => {
  const toggleDropzone = () => {
    setShowDropzone(!showDropzone);
    if (showDropzone) {
      setFiles([]);
    }
  };
  return (
    <div className="px-3 mt-2">
      <div className="flex w-full p-2 border-[1px] border-gray-300 dark:border-dark-third rounded-lg">
        <p className="flex-1 px-2 flex items-center font-semibold dark:text-dark-txt">
          Add to your post
        </p>
        <button
          type="button"
          onClick={toggleDropzone}
          aria-label="show dropzone"
          className="bx bx-images text-green-500 hover:text-green-400 px-2 flex items-center text-3xl cursor-pointer"
        />
      </div>
    </div>
  );
};

OpenDropzoneButton.propTypes = {
  setShowDropzone: PropTypes.func.isRequired,
  showDropzone: PropTypes.bool.isRequired,
  setFiles: PropTypes.func.isRequired,
};

export default OpenDropzoneButton;
