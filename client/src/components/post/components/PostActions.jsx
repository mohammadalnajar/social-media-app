import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import PostAction from './postActions/PostAction';
import Comment from './postActions/Comment';
import Dislike from './postActions/Dislike';
import Like from './postActions/Like';
import Share from './postActions/Share';
import PostStats from './postActions/PostStats';
import { getDislikes, getLikes } from '../api';
import usePostActions from '../hooks/usePostActions';

const PostActions = ({ postId }) => {
  const { likes, dislikes } = usePostActions({ postId });

  return (
    <div>
      {likes && dislikes ? (
        <>
          <PostStats
            likes={likes}
            dislikes={dislikes}
            // comments={comments}
          />
          <PostAction>
            <Like postId={postId} likes={likes} />
            <Dislike postId={postId} dislikes={dislikes} />
            <Comment
              postId={postId}
              // comments={comments}
            />
            <Share />
          </PostAction>
        </>
      ) : null}
    </div>
  );
};
PostActions.propTypes = {
  postId: PropTypes.string.isRequired,
};
export default PostActions;
