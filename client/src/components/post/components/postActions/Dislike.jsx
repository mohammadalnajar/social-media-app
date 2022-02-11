import React from 'react';

const Dislike = () => {
  return (
    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
      <i className="bx bx-dislike" />
      <span className="text-sm font-semibold">Dislike</span>
    </div>
  );
};

export default Dislike;
