import React from 'react';
import PropTypes from 'prop-types';
import useAction from '../../hooks/useAction';

const Dislike = ({ postId, dislikes, userLikedPost }) => {
  const {
    dislikeOrUnDislikePost,
    checked: userDislikePost,
    likeOrDislike,
  } = useAction({
    dislikes,
    postId,
  });

  const { isLoading } = dislikeOrUnDislikePost;

  const handleClick = () => {
    const data = {
      postId,
      dislike: !userDislikePost,
    };
    if (userLikedPost) {
      likeOrDislike(data);
      return;
    }
    dislikeOrUnDislikePost.mutate(data);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${
        isLoading && 'loading'
      } btn bg-transparent   border-none w-1/4 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer  ${
        userDislikePost ? 'text-red-500' : 'text-gray-500 dark:text-dark-txt'
      }`}
    >
      <i className="bx bx-dislike" />
      <span className="text-sm font-semibold">Dislike</span>
    </button>
  );
};
Dislike.propTypes = {
  postId: PropTypes.string.isRequired,
  dislikes: PropTypes.arrayOf(PropTypes.object),
  userLikedPost: PropTypes.bool.isRequired,
};

Dislike.defaultProps = {
  dislikes: [{}],
};
export default Dislike;
