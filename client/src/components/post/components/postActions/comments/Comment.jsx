import React from 'react';
import PropTypes from 'prop-types';
import timeElapsed from '../../../../../utils/timeElapsed';
import CommentAvatar from './CommentAvatar';
import CommentActions from './CommentActions';
import useToggle from '../../../../../hooks/useToggle';
import EditComment from './EditComment';

const Comment = ({ comment }) => {
  const [isMenuShow, toggleMenu] = useToggle({});
  const [isShowEdit, toggleEdit] = useToggle({});
  const {
    userData: { profileImageUrl, firstName, lastName },
    text,
  } = comment;
  const timeAgo = timeElapsed(new Date(comment.createdAt).getTime(), true);

  return (
    <div className="mb-4">
      {!isShowEdit ? (
        <div
          className="flex  space-x-2"
          onMouseEnter={() => {
            return toggleMenu('show');
          }}
          onMouseLeave={() => {
            return toggleMenu('hide');
          }}
        >
          <CommentAvatar profileImageUrl={profileImageUrl} />
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
              {timeAgo}
            </div>
          </div>
          <div className="flex items-center mb-5">
            {isMenuShow && <CommentActions toggleEdit={toggleEdit} />}
          </div>
        </div>
      ) : (
        <EditComment toggleEdit={toggleEdit} />
      )}
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
