import React from 'react';
import PostAction from './components/PostAction';
import PostAuthor from './components/PostAuthor';
import PostComment from './components/PostComment';
import PostContent from './components/PostContent';
import PostMedia from './components/PostMedia';
import PostStats from './components/PostStats';

const Post = () => {
  return (
    <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
      <PostAuthor />
      <PostContent />
      <PostMedia />
      <PostStats />
      <PostAction />
      <PostComment />
    </div>
  );
};

export default Post;
