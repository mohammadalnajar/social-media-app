import React from 'react';
import PropTypes from 'prop-types';
import PostComment from '../../PostComment';

const EditComment = ({
  profileImageUrl,
  commentId,
  postId,
  text,
  toggleEdit,
}) => {
  return (
    <div>
      <PostComment
        profileImageUrl={profileImageUrl}
        postId={postId}
        commentId={commentId}
        defaultTextVal={text}
        method="PUT"
        close={toggleEdit}
      />

      <button
        type="button"
        onClick={toggleEdit}
        className="hover:underline hover:text-blue-500 text-blue-600"
      >
        cancel
      </button>
    </div>
  );
};
EditComment.propTypes = {
  toggleEdit: PropTypes.func.isRequired,
  commentId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  profileImageUrl: PropTypes.string.isRequired,
};
export default EditComment;
