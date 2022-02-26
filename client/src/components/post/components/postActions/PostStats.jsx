/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React from 'react';
import useToggle from '../../../../hooks/useToggle';

const PostStats = ({ likes, dislikes, comments }) => {
  const [isShowComments, toggleCommentsTooltip] = useToggle({});
  const [isShowLikes, toggleLikesTooltip] = useToggle({});
  const [isShowDislikes, toggleDislikesTooltip] = useToggle({});
  const likesUsersData = [
    ...new Set(
      likes.map((like) => {
        return `${like?.firstName} ${like?.lastName}`;
      })
    ),
  ];
  const dislikesUserData = [
    ...new Set(
      dislikes.map((dislike) => {
        return `${dislike?.firstName} ${dislike?.lastName}`;
      })
    ),
  ];
  const commentsUsersData = [
    ...new Set(
      comments.map((comment) => {
        return `${comment?.userData.firstName} ${comment?.userData.lastName}`;
      })
    ),
  ];

  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center">
          {likes?.length ? (
            <div
              onMouseEnter={toggleLikesTooltip}
              onMouseLeave={toggleLikesTooltip}
              className="relative rounded-full mr-4"
            >
              <i className="bx bx-like text-2xl" />
              <span className="text-xs absolute -top-2 -right-2 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                {likes.length}
              </span>
              {isShowLikes && (
                <div className="absolute capitalize -right-24 -left-5 bg-gray-400 px-3 py-1 rounded-2xl text-black">
                  {likesUsersData &&
                    likesUsersData?.map((user) => {
                      return <div key={user}>{user}</div>;
                    })}
                </div>
              )}
            </div>
          ) : null}

          {dislikes?.length ? (
            <div
              onMouseEnter={toggleDislikesTooltip}
              onMouseLeave={toggleDislikesTooltip}
              className="relative rounded-full mr-4"
            >
              <i className="bx bx-dislike text-2xl" />
              <span className="text-xs absolute -top-2 -right-2 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                {dislikes.length}
              </span>
              {isShowDislikes && (
                <div className="absolute capitalize -right-24 -left-4 bg-gray-400 px-3 py-1 rounded-2xl text-black">
                  {dislikesUserData &&
                    dislikesUserData?.map((user) => {
                      return <div key={user}>{user}</div>;
                    })}
                </div>
              )}
            </div>
          ) : null}
        </div>
        <div
          onMouseEnter={toggleCommentsTooltip}
          onMouseLeave={toggleCommentsTooltip}
          data-tip={commentsUsersData}
          className="text-gray-500 cursor-pointer dark:text-dark-txt relative "
        >
          <span>{comments?.length ? `${comments.length} Comments` : null}</span>
          {isShowComments && (
            <div className="absolute capitalize -left-20 -right-4 bg-gray-400 px-3 py-1 rounded-2xl text-black">
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
