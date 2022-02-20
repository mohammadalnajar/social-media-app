import React from 'react';
import PropTypes from 'prop-types';
import useComment from '../../../hooks/useComment';

const CommentActions = ({ commentId, toggleEdit, postId }) => {
  const { removeComment } = useComment({ postId });

  const handleRemoveCommentClick = () => {
    removeComment.mutate({ commentId });
  };

  return (
    <div className="dropdown dropdown-end">
      <button
        data-tip="Edit or delete this"
        type="button"
        className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer tooltip tooltip-bottom"
      >
        <i className="bx bx-dots-horizontal-rounded" />
      </button>
      <ul className="p-2 shadow menu dropdown-content bg-base-100 dark:bg-dark-third rounded-box w-52">
        <li className="dark:hover:bg-dark-hover dark:text-gray-100">
          <button
            type="button"
            className="btn bg-transparent border-0 dark:hover:bg-dark-hover"
            onClick={toggleEdit}
          >
            <i className="bx bx-edit-alt mr-2" />
            Edit post
          </button>
        </li>
        <li className="dark:hover:bg-dark-hover text-red-500">
          <button
            type="button"
            onClick={handleRemoveCommentClick}
            className="btn bg-transparent border-0 dark:hover:bg-dark-hover"
          >
            <i className="bx bx-trash mr-2" />
            Delete post
          </button>
        </li>
      </ul>
    </div>
  );
};

CommentActions.propTypes = {
  toggleEdit: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
};

export default CommentActions;
