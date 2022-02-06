import PropTypes from 'prop-types';
import React from 'react';

const ImagePreview = ({ files, setFiles }) => {
  return files?.map((file) => {
    return (
      <div
        className="relative mt-2 rounded-lg border-[1px] p-2 border-gray-300 dark:border-dark-third"
        key={file.name}
      >
        <img src={file.preview} alt="preview" />
        <button
          type="button"
          onClick={() => {
            setFiles([]);
          }}
          className="absolute right-4 top-4 btn btn-circle btn-sm border-[1px] border-gray-300 hover:border-gray-300 bg-gray-100 dark:bg-dark-third hover:bg-gray-200 dark:hover:bg-dark-hover"
        >
          <i className="bx bx-x text-2xl text-gray-500 dark:text-dark-txt" />
        </button>
      </div>
    );
  });
};

ImagePreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFiles: PropTypes.func.isRequired,
};

export default ImagePreview;
