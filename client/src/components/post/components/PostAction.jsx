import React from 'react';
import Comment from './postActions/Comment';
import Dislike from './postActions/Dislike';
import Like from './postActions/Like';
import Share from './postActions/Share';

const PostAction = () => {
  return (
    <div className="py-2 px-4">
      <div className="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
        <div className="flex space-x-2">
          <Like />
          <Dislike />
          <Comment />
          <Share />
        </div>
      </div>
    </div>
  );
};

export default PostAction;
