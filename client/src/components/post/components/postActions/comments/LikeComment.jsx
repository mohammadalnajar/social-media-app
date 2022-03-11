import React from 'react';
import PropTypes from 'prop-types';
import useComment from '../../../hooks/useComment';

const LikeComment = ({ commentId, likes }) => {
  const { checked } = useComment({ likes });
  return (
    <button
      type="submit"
      onClick={() => console.log(commentId, likes, checked)}
      className={`${
        checked ? 'dark:text-blue-500' : 'dark:text-white'
      } font-semibold cursor-pointer hover:underline `}
    >
      Like
    </button>
  );
};

LikeComment.propTypes = {
  commentId: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default LikeComment;
