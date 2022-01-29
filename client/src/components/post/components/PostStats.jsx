import PropTypes from 'prop-types';
import React from 'react';

const PostStats = ({ likes, dislikes, comments }) => {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center">
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
        <div className="text-gray-500 dark:text-dark-txt">
          <span>{comments?.length ? `${comments.length} comments` : null}</span>
        </div>
      </div>
    </div>
  );
};

PostStats.propTypes = {
  likes: PropTypes.arrayOf(PropTypes.object).isRequired,
  dislikes: PropTypes.arrayOf(PropTypes.object).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostStats;
