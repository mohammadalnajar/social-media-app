import React from 'react';
import DarkModeMoon from '../DarkModeMoon';
import Messenger from '../features/messenger/Messenger';
import Avatar from './Avatar';

const OptionsMenu = () => {
  return (
    <ul className="hidden md:flex mx-4 items-center justify-center">
      <li className="h-full hidden xl:flex">
        <Avatar />
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
        <DarkModeMoon extraClasses="" />
      </li>
    </ul>
  );
};

export default OptionsMenu;
