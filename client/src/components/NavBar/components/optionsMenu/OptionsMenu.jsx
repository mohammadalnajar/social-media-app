import React from 'react';
import Messenger from '../features/messenger/Messenger';

const OptionsMenu = () => {
  return (
    <ul className="hidden md:flex mx-4 items-center justify-center">
      <li className="h-full hidden xl:flex">
        <button
          type="button"
          href="#"
          className="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
        >
          <img
            src="./assets/images/tuat.jpg"
            alt=""
            className="rounded-full h-7 w-7"
          />
          <span className="mx-2 font-semibold dark:text-dark-txt">Tuat</span>
        </button>
      </li>
      <li>
        <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
          <i className="bx bx-plus" />
        </div>
      </li>
      <li>
        <Messenger extraClasses="" />
      </li>
      <li>
        <div className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
          <i className="bx bxs-bell" />
          <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
            9
          </span>
        </div>
      </li>
      <li>
        <div
          className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative"
          id="dark-mode-toggle"
        >
          <i className="bx bxs-moon" />
        </div>
      </li>
    </ul>
  );
};

export default OptionsMenu;
