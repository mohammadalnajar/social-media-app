import React from 'react';
import PropTypes from 'prop-types';
import useLike from '../../hooks/useLike';

const Like = ({ postId, likes }) => {
  const { likeOrUnlikePost, checked: userLikePost } = useLike({
    likes,
    postId,
  });

  const handleClick = () => {
    const data = {
      postId,
      like: !userLikePost,
    };

    likeOrUnlikePost.mutate(data);
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer ${
        userLikePost ? 'text-blue-500' : 'text-gray-500 dark:text-dark-txt'
      } `}
    >
      <i className="bx bx-like" />
      <span className="text-sm font-semibold">Like</span>
    </button>
  );
};
Like.propTypes = {
  postId: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.object),
};

Like.defaultProps = {
  likes: [{}],
};
export default Like;
