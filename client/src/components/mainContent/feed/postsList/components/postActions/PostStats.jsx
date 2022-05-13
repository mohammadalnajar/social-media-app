/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React from 'react';
import useToggle from '../../../../../../hooks/useToggle';
import DislikeIcon from '../../../../../sharedComponents/DislikeIcon';
import LikeIcon from '../../../../../sharedComponents/LikeIcon';

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
        <div className="flex items-center">
          {likes?.length ? (
            <div
              onMouseEnter={toggleLikesTooltip}
              onMouseLeave={toggleLikesTooltip}
              className="rounded-full cursor-pointer relative flex items-center mr-2 mt-4"
            >
              <LikeIcon />
              <span className="text-base hover:underline ml-2 text-white font-semibold rounded-full px-1 text-center">
                {likes.length}
              </span>
              {isShowLikes && (
                <div className="absolute capitalize z-10 top-full -right-28 -left-5 bg-gray-400 px-3 py-1 rounded-2xl text-black">
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
              className="rounded-full cursor-pointer relative flex items-center mt-4"
            >
              <DislikeIcon />
              <span className="text-base hover:underline ml-2 text-white font-semibold rounded-full px-1 text-center">
                {dislikes.length}
              </span>
              {isShowDislikes && (
                <div className="absolute capitalize z-10 top-full -right-28 -left-5 bg-gray-400 px-3 py-1 rounded-2xl text-black">
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
          className="text-gray-500 hover:underline cursor-pointer dark:text-dark-txt relative "
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
