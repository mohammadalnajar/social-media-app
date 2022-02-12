import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import PostAction from './postActions/PostAction';
import Comment from './postActions/Comment';
import Dislike from './postActions/Dislike';
import Like from './postActions/Like';
import Share from './postActions/Share';
import PostStats from './postActions/PostStats';
import { getLikes } from '../api';

const PostActions = ({ postId }) => {
  const { data: { data: { likes } = {} } = {} } = useQuery(
    [`getLikes-${postId}`, { postId }],
    getLikes,
    {
      staleTime: 10 * 60 * 1000,
      refetchInterval: 2 * 60 * 1000,
    }
  );
  return (
    <div>
      {likes && (
        <>
          <PostStats
            likes={likes}
            // dislikes={dislikes}
            // comments={comments}
          />
          <PostAction>
            <Like postId={postId} likes={likes} />
            <Dislike
              postId={postId}
              // dislikes={dislikes}
            />
            <Comment
              postId={postId}
              // comments={comments}
            />
            <Share />
          </PostAction>
        </>
      )}
    </div>
  );
};
PostActions.propTypes = {
  postId: PropTypes.string.isRequired,
};
export default PostActions;
