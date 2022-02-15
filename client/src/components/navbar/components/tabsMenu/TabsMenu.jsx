import React, { useState } from 'react';
import SideMenuTab from './SideMenuTab';
import Tab from './Tab';

const TabsMenu = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const selectedColor = (tabName) => {
    return selectedTab === tabName
      ? 'text-blue-500 border-b-4 border-blue-500'
      : 'text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt';
  };
  return (
    <ul className="flex w-full lg:w-max md:w-1/3 items-center justify-center">
      <li className="w-1/5 md:w-max text-center">
        <Tab title="home" selectedState={{ setSelectedTab, selectedColor }} />
      </li>
      <li className="w-1/5 md:w-max text-center">
        <Tab title="watch" selectedState={{ setSelectedTab, selectedColor }} />
      </li>
      <li className="w-1/5 md:w-max text-center">
        <Tab
          title="marketplace"
          selectedState={{ setSelectedTab, selectedColor }}
        />
      </li>
      <li className="w-1/5 md:w-max text-center">
        <Tab
          title="friends"
          dynamicNum={9} // fetch this from server
          selectedState={{ setSelectedTab, selectedColor }}
        />
      </li>
      <li className="w-1/5 md:w-max text-center hidden md:inline-block">
        <Tab
          title="news"
          dynamicNum={30}
          selectedState={{ setSelectedTab, selectedColor }}
        />
      </li>
      <li className="w-1/5 md:w-max text-center inline-block md:hidden">
        <SideMenuTab />
      </li>
    </ul>
  );
};

export default TabsMenu;
