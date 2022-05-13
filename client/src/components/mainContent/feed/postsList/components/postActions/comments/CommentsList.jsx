/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
  return (
    <div className="py-2 px-4">
      {comments.length > 0
        ? comments?.map((comment) => {
            if (comment?._id)
              return <Comment comment={comment} key={comment?._id} />;
            return null;
          })
        : null}
    </div>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

CommentsList.defaultProps = {
  comments: [{}],
};
export default CommentsList;
