/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import timeElapsed from '../../../../../utils/timeElapsed';
import CommentAvatar from './CommentAvatar';
import CommentAuthorActions from './CommentAuthorActions';
import useToggle from '../../../../../hooks/useToggle';
import EditComment from './EditComment';
import getFullDateAndTime from '../../../../../utils/convertTimestamp';
import LikeComment from './commentActions/LikeComment';
import CommentActions from './commentActions/CommentActions';
// import ReplyToComment from './commentActions/ReplyToComment';
import EditedAt from '../../EditedAt';
import CommentContent from './CommentContent';
import CommentLiked from './commentActions/CommentLiked';

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
    <div className="mb-4 mx-2">
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
          <div className="min-w-[150px]">
            <CommentContent
              firstName={firstName}
              lastName={lastName}
              text={text}
            />
            <CommentActions>
              <LikeComment
                postId={postId}
                commentId={commentId}
                likes={comment.likes}
              />
              {/* <ReplyToComment /> */}
              <div>{timeAgo}</div>
              {comment?.updatedAt && <EditedAt editedAt={editedAt} />}
            </CommentActions>
            {comment?.likes.length > 0 && (
              <CommentLiked likes={comment.likes} />
            )}
          </div>

          {isMenuShow && (
            <CommentAuthorActions
              commentId={commentId}
              postId={postId}
              toggleEdit={toggleEdit}
            />
          )}
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
    likes: PropTypes.arrayOf(PropTypes.object),
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
    likes: [{}],
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
