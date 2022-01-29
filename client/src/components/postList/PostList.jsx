import React from 'react';
import PostAction from './components/PostAction';
import PostAuthor from './components/PostAuthor';
import PostComment from './components/PostComment';
import PostContent from './components/PostContent';
import PostMedia from './components/PostMedia';
import PostStats from './components/PostStats';

const PostList = () => {
  return (
    <div>
      {/* <!-- POST --> */}
      <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
        {/* <!-- POST AUTHOR --> */}
        <PostAuthor />
        {/* <!-- END POST AUTHOR --> */}

        {/* <!-- POST CONTENT --> */}
        <PostContent />
        {/* <!-- END POST CONTENT --> */}

        {/* <!-- POST IMAGE --> */}
        <PostMedia />
        {/* <!-- END POST IMAGE --> */}

        {/* <!-- POST REACT --> */}
        <PostStats />
        {/* <!-- END POST REACT --> */}

        {/* <!-- POST ACTION --> */}
        <PostAction />
        {/* <!-- END POST ACTION --> */}

        {/* <!-- COMMENT FORM --> */}
        <PostComment />
        {/* <!-- END COMMENT FORM --> */}
      </div>
      {/* <!-- END POST --> */}
    </div>
  );
};

export default PostList;
