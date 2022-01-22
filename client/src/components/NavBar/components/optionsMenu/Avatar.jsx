import React from 'react';

const Avatar = () => {
  return (
    <button
      type="button"
      href="#"
      className="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1 hover:opacity-80 hover:cursor-pointer"
    >
      <img
        src="./assets/images/tuat.jpg"
        alt=""
        className="rounded-full h-7 w-7"
      />
      <span className="mx-2 font-semibold dark:text-dark-txt">Tuat</span>
    </button>
  );
};

export default Avatar;
