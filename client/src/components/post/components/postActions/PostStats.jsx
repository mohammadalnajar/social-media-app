/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React from 'react';
import useToggle from '../../../../hooks/useToggle';

const PostStats = ({ likes, dislikes, comments }) => {
  const [isShowComments, toggleCommentsTooltip] = useToggle({});
  const commentsUsersData = [
    ...new Set(
      comments.map((comment) => {
        return `${comment.userData.firstName} ${comment.userData.lastName}`;
      })
    ),
  ];
  const [isShowLikes, toggleLikesTooltip] = useToggle({});
  const likesUsersData = [...new Set(likes)];
  const [isShowDislikes, toggleDislikesTooltip] = useToggle({});
  const dislikesUserData = [...new Set(dislikes)];

  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center relative">
          {likes?.length ? (
            <span className="rounded-full grid place-items-center text-2xl mr-2">
              <i className="bx bx-like" /> {likes.length}
            </span>
          ) : null}

          {dislikes?.length ? (
            <span className="rounded-full grid place-items-center text-2xl">
              <i className="bx bx-dislike" /> {dislikes.length}
            </span>
          ) : null}
        </div>
        <div
          onMouseEnter={toggleCommentsTooltip}
          onMouseLeave={toggleCommentsTooltip}
          data-tip={commentsUsersData}
          className="text-gray-500 cursor-pointer dark:text-dark-txt relative "
        >
          <span>{comments?.length ? `${comments.length} comments` : null}</span>
          {isShowComments && (
            <div className="absolute -left-20 -right-4 bg-gray-400 px-3 py-1 rounded-2xl text-black">
              {commentsUsersData &&
                commentsUsersData?.map((user) => {
                  return <div key={user}>{user}</div>;
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

PostStats.propTypes = {
  likes: PropTypes.arrayOf(PropTypes.object),
  dislikes: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.arrayOf(PropTypes.object),
};

PostStats.defaultProps = {
  likes: [{}],
  dislikes: [{}],
  comments: [{}],
};
export default PostStats;
