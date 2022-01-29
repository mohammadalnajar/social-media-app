import React from 'react';

const PostAction = () => {
  return (
    <div className="py-2 px-4">
      <div className="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
        <div className="flex space-x-2">
          <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
            <i className="bx bx-like" />
            <span className="text-sm font-semibold">Like</span>
          </div>
          <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
            <i className="bx bx-comment" />
            <span className="text-sm font-semibold">Comment</span>
          </div>
          <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
            <i className="bx bx-share bx-flip-horizontal" />
            <span className="text-sm font-semibold">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAction;
