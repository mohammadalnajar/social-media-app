import React from 'react';

const Post = () => {
  return (
    <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
      <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
        <img
          src="./assets/images/tuat.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full hover:opacity-80 hover:cursor-pointer"
        />
        <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt hover:bg-gray-300 dark:hover:bg-dark-hover">
          <span>Whats on your mind, Tuat?</span>
        </div>
      </div>
      <div className="p-2 flex">
        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
          <i className="bx bxs-video-plus" />
          <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
            Live video
          </span>
        </div>
        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
          <i className="bx bx-images" />
          <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
            Live video
          </span>
        </div>
        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
          <i className="bx bx-smile" />
          <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
            Live video
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
