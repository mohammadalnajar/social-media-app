import React from 'react';
import PropTypes from 'prop-types';
import PostAction from './postActions/PostAction';
// import CommentButton from './postActions/CommentButton';
import Dislike from './postActions/Dislike';
import Like from './postActions/Like';
// import Share from './postActions/Share';
import PostStats from './postActions/PostStats';
import usePostActions from '../hooks/usePostActions';
import CommentsList from './postActions/comments/CommentsList';
import useAction from '../hooks/useAction';

const PostActions = ({ postId }) => {
  const { likes, dislikes, comments } = usePostActions({ postId });
  const {
    checked: { liked, disliked },
  } = useAction({ likes, dislikes });

  return (
    <div>
      {likes && dislikes && comments ? (
        <>
          <PostStats likes={likes} dislikes={dislikes} comments={comments} />
          <PostAction>
            <Like userDislikedPost={disliked} postId={postId} likes={likes} />
            <Dislike
              userLikedPost={liked}
              postId={postId}
              dislikes={dislikes}
            />
            {/* <CommentButton postId={postId} comments={comments} /> */}
            {/* <Share /> */}
          </PostAction>
          <CommentsList postId={postId} comments={comments} />
        </>
      ) : null}
    </div>
  );
};
PostActions.propTypes = {
  postId: PropTypes.string.isRequired,
};
export default PostActions;
