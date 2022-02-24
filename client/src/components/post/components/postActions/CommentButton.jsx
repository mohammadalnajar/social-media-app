import React from 'react';

const CommentButton = () => {
  return (
    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
      <i className="bx bx-comment" />
      <span className="text-sm font-semibold">Comment</span>
    </div>
  );
};

export default CommentButton;
