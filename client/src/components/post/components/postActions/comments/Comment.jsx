/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import timeElapsed from '../../../../../utils/timeElapsed';
import CommentAvatar from './CommentAvatar';
import CommentActions from './CommentActions';
import useToggle from '../../../../../hooks/useToggle';
import EditComment from './EditComment';
import getFullDateAndTime from '../../../../../utils/convertTimestamp';
import LikeComment from './LikeComment';

const Comment = ({ comment }) => {
  const [isMenuShow, toggleMenu] = useToggle({});
  const [isShowEdit, toggleEdit] = useToggle({});
  const {
    _id: commentId,
    postId,
    userData: { userId, profileImageUrl, firstName, lastName },
    text,
  } = comment;

  const {
    data: {
      data: { _id: loggedUserId },
    },
  } = useQuery('fetchUser');

  const timeAgo = timeElapsed(new Date(comment.createdAt).getTime(), true);
  const editedAt = getFullDateAndTime(comment.updatedAt);
  return (
    <div className="mb-4">
      {!isShowEdit && (
        <div
          className="flex  space-x-2"
          onMouseEnter={() => {
            return userId === loggedUserId && toggleMenu('show');
          }}
          onMouseLeave={() => {
            return toggleMenu('hide');
          }}
        >
          <CommentAvatar profileImageUrl={profileImageUrl} />
          <div>
            <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
              <span className="font-semibold block capitalize">
                {firstName} {lastName}
              </span>
              <span>{text}</span>
            </div>
            <div className="px-2 pt-1 text-xs text-gray-500 dark:text-dark-txt">
              <LikeComment />
              <span>.</span>
              <span className="font-semibold cursor-pointer">Reply</span>
              <span>.{timeAgo}</span>
              {comment?.updatedAt && (
                <span
                  data-tip={`edited at ${editedAt}`}
                  className="ml-2 text-sm underline dark:hover:text-dark-txt cursor-pointer text-gray-500 tooltip tooltip-bottom"
                >
                  edited
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center mb-5">
            {isMenuShow && (
              <CommentActions
                commentId={commentId}
                postId={postId}
                toggleEdit={toggleEdit}
              />
            )}
          </div>
        </div>
      )}
      {isShowEdit && (
        <EditComment
          profileImageUrl={profileImageUrl}
          postId={postId}
          commentId={commentId}
          text={text}
          toggleEdit={toggleEdit}
        />
      )}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string,
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
    _id: '',
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
