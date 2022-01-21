import React from 'react';

const NewsTab = () => {
  return (
    <button
      type="button"
      href="#"
      className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
    >
      <i className="bx bx-layout" />
      <span className="text-xs absolute top-1 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
        9+
      </span>
    </button>
  );
};

export default NewsTab;
