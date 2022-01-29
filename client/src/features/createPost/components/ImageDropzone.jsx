/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropzone = ({ files, setFiles, setImg, children }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onloadend = () => {
        setImg(reader.result);
      };
      setFiles(
        acceptedFiles.map((file) => {
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        })
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => {
      URL.revokeObjectURL(file.preview);
    });
  }, [files]);

  return (
    <div>
      {files.length > 0 ? (
        children
      ) : (
        <div
          {...getRootProps()}
          className="h-52 my-2 rounded-lg border-[1px] p-2 border-gray-300 dark:border-dark-third"
        >
          <div
            htmlFor="file"
            className="relative flex flex-col justify-center items-center mx-auto h-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-hover cursor-pointer rounded-lg border-dark-txt"
          >
            <input id="file" {...getInputProps()} />
            <i className="bx bx-image-add text-[40px] dark:text-dark-txt" />
            <p className="font-semibold dark:text-dark-txt text-lg">
              Add a Photo
            </p>
            <p className="text-gray-500 dark:text-dark-txt text-xs">
              or drag and drop
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

ImageDropzone.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
  setImg: PropTypes.func.isRequired,
  setFiles: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ImageDropzone;
