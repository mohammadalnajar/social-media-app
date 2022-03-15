import React from 'react';
import PropTypes from 'prop-types';
import useToggle from '../../../../../../hooks/useToggle';
import LikedIcon from '../../../LikedIcon';

const CommentLiked = ({ likes }) => {
  const [isShowCommentLikes, toggleCommentLikesTooltip] = useToggle({});

  const commentLikesUsersData = [
    ...new Set(
      likes.map((user) => {
        return `${user?.firstName} ${user?.lastName}`;
      })
    ),
  ];

  return (
    <div className="relative bottom-12 w-8 -right-[100%] -translate-x-5 -mb-8">
      <LikedIcon toggleShowTooltip={toggleCommentLikesTooltip} />
      {isShowCommentLikes && (
        <div className="absolute capitalize w-36 -left-2 bg-gray-400 px-3 py-1 rounded-2xl text-black ">
          {commentLikesUsersData &&
            commentLikesUsersData?.map((user) => {
              return <div key={user}>{user}</div>;
            })}
        </div>
      )}
    </div>
  );
};
CommentLiked.propTypes = {
  likes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentLiked;
