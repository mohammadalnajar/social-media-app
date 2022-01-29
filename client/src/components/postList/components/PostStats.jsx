import React from 'react';

const PostStats = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-row-reverse items-center">
          <span className="ml-2 text-gray-500 dark:text-dark-txt">999</span>
          <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-800">
            <i className="bx bxs-angry" />
          </span>
          <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-500">
            <i className="bx bxs-heart-circle" />
          </span>
          <span className="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500">
            <i className="bx bx-happy-alt" />
          </span>
        </div>
        <div className="text-gray-500 dark:text-dark-txt">
          <span>90 comments</span>
          <span>66 Shares</span>
        </div>
      </div>
    </div>
  );
};

export default PostStats;
