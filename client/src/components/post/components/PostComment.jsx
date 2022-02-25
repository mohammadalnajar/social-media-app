import PropTypes from 'prop-types';
import React from 'react';
import useComment from '../hooks/useComment';

const PostComment = ({
  profileImageUrl,
  postId,
  commentId,
  defaultTextVal,
  method,
  close,
}) => {
  const { postComment, editComment, formData, handleInputChange } = useComment({
    postId,
    defaultTextVal,
    close,
  });

  const handleSubmit = (e) => {
    if (e.type === 'click' || e.code === 'Enter') {
      if (method === 'POST')
        postComment.mutate({ text: formData.text, postId });
      if (method === 'PUT')
        editComment.mutate({ text: formData.text, commentId });
    }
  };

  const textFilled = () => {
    return formData.text.length > 0 && true;
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
            onKeyDown={handleSubmit}
            placeholder="Write a comment..."
            className="outline-none bg-transparent flex-1 w-1/2 md:w-3/4"
          />
          <div className="flex space-x-0 items-center justify-end w-1/2 md:w-1/4">
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
            <button
              type="button"
              disabled={!textFilled() && true}
              className={`rounded-full h-[25px] w-[25px]  ${
                textFilled()
                  ? 'hover:text-blue-500 hover:bg-dark-second'
                  : 'cursor-not-allowed'
              }`}
              onClick={handleSubmit}
            >
              <i className="bx bxs-send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PostComment.propTypes = {
  postId: PropTypes.string,
  commentId: PropTypes.string,
  defaultTextVal: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  profileImageUrl: PropTypes.string.isRequired,
  close: PropTypes.func,
};

PostComment.defaultProps = {
  postId: '',
  commentId: '',
  close: () => {},
};

export default PostComment;
