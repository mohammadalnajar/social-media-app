import PropTypes from 'prop-types';
import React from 'react';
import useComment from '../hooks/useComment';

const PostComment = ({ postId }) => {
  const {
    userData: { profileImageUrl },
    postComment,
    formData,
    handleInputChange,
  } = useComment({ postId });
  console.log(postComment);
  const handleSubmit = () => {
    console.log(formData, 'data');
    postComment.mutate({ text: formData.text, postId });
  };
  return (
    <div className="py-2 px-4">
      <div className="flex space-x-2">
        <img
          src={profileImageUrl}
          alt="Profile"
          className="w-9 h-9 rounded-full border-2 border-gray-300 dark:border-dark-hover"
        />
        <div className="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
            placeholder="Write a comment..."
            className="outline-none bg-transparent flex-1"
          />
          <div className="flex space-x-0 items-center justify-center">
            <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
              <i className="bx bx-smile" />
            </span>
            <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
              <i className="bx bx-camera" />
            </span>
            <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
              <i className="bx bxs-file-gif" />
            </span>
            <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
              <i className="bx bx-happy-heart-eyes" />
            </span>
            <button type="button" className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PostComment.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default PostComment;
