import React, { useState } from 'react';
import Logo from '../navbar/components/Logo';
import SidebarButton from './components/SidebarButton';

const LeftSidebar = () => {
  const [selected, setSelected] = useState('feed');

  return (
    <div className="flex flex-col p-6">
      <Logo />
      <div className="py-4">
        <div>
          <SidebarButton
            selected={selected}
            setSelected={setSelected}
            srcImage="https://robohash.org/mmm"
            option="feed"
          />
        </div>
        <div>
          <SidebarButton
            selected={selected}
            setSelected={setSelected}
            srcImage="https://robohash.org/mmm"
            option="profile"
          />
        </div>
        <div>
          <button
            type="button"
            className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
          >
            <img
              src="./assets/images/friends.png"
              alt="Profile "
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold">Friends</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
          >
            <img
              src="./assets/images/page.png"
              alt="Profile "
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold">Pages</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
          >
            <img
              src="./assets/images/memory.png"
              alt="Profile "
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold">Memories</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
          >
            <img
              src="./assets/images/group.png"
              alt="Profile "
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold">Groups</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
          >
            <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
              <i className="bx bx-chevron-down" />
            </span>
            <span className="font-semibold">See more</span>
          </button>
        </div>
        <div className="border-b border-gray-200 dark:border-dark-third mt-6" />
      </div>
    </div>
  );
};

export default LeftSidebar;
