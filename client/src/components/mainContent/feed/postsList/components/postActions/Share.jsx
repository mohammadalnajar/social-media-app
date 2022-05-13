import React from 'react';

const Share = () => {
  return (
    <div className="w-1/4 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
      <i className="bx bx-share bx-flip-horizontal" />
      <span className="text-sm font-semibold">Share</span>
    </div>
  );
};

export default Share;
