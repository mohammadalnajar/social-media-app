import React from 'react';
import PropTypes from 'prop-types';
import useAction from '../../hooks/useAction';

const Like = ({ postId, likes, userDislikedPost }) => {
  const {
    likeOrUnlikePost,
    checked: userLikePost,
    likeOrDislike,
  } = useAction({
    likes,
    postId,
  });

  const { isLoading } = likeOrUnlikePost;

  const handleClick = () => {
    const data = {
      postId,
      like: !userLikePost,
      userDislikedPost,
    };

    if (userDislikedPost) {
      likeOrDislike(data);
      return;
    }
    likeOrUnlikePost.mutate(data);
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`${
        isLoading && 'loading'
      } btn bg-transparent  border-none w-1/4 flex space-x-2 justify-center items-center  hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer ${
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
  userDislikedPost: PropTypes.bool.isRequired,
};

Like.defaultProps = {
  likes: [{}],
};
export default Like;
