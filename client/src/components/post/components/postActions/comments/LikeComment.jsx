import React from 'react';
import PropTypes from 'prop-types';
import useComment from '../../../hooks/useComment';

const LikeComment = ({ commentId, likes, postId }) => {
  const { checked: userLikeComment, likeAComment } = useComment({
    likes,
    postId,
  });

  const handleClick = () => {
    const data = {
      commentId,
      like: !userLikeComment,
    };

    likeAComment.mutate(data);
  };

  return (
    <div>
      <button
        type="submit"
        onClick={handleClick}
        className={`${
          userLikeComment ? 'dark:text-blue-500' : 'dark:text-white'
        } font-semibold cursor-pointer hover:underline `}
      >
        Like
      </button>
    </div>
  );
};

LikeComment.propTypes = {
  commentId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default LikeComment;
