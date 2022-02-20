import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  const {
    userData: { profileImageUrl, firstName, lastName },
    text,
  } = comment;

  return (
    <div className="mb-4">
      <div className="flex space-x-2">
        <img
          src={profileImageUrl}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
            <span className="font-semibold block">
              {firstName} {lastName}
            </span>
            <span>{text}</span>
          </div>
          <div className="px-2 pt-1 text-xs text-gray-500 dark:text-dark-txt">
            <span className="font-semibold cursor-pointer">Like</span>
            <span>.</span>
            <span className="font-semibold cursor-pointer">Reply</span>
            <span>.</span>
            10m
          </div>
        </div>
      </div>
    </div>
  );
};
Comment.propTypes = {
  comment: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string,
    dislikes: PropTypes.arrayOf(PropTypes.string),
    likes: PropTypes.arrayOf(PropTypes.string),
    photos: PropTypes.arrayOf(PropTypes.string),
    postId: PropTypes.string,
    text: PropTypes.string,
    updatedAt: PropTypes.string,
    userData: PropTypes.shape({
      userId: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      profileImageUrl: PropTypes.string,
    }),
  }),
};
Comment.defaultProps = {
  comment: {
    comments: [''],
    createdAt: '',
    dislikes: [''],
    likes: [''],
    photos: [''],
    postId: '',
    text: '',
    updatedAt: '',
    userData: {
      userId: '',
      firstName: '',
      lastName: '',
      profileImageUrl: '',
    },
  },
};
export default Comment;
