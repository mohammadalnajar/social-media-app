import React, { useState } from 'react';
import FriendsTab from './FriendsTab';
import HomeTab from './HomeTab';
import Marketplace from './MarketplaceTab';
import NewsTab from './NewsTab';
import SideMenuTab from './SideMenuTab';
import WatchTab from './WatchTab';

const TabsMenu = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const selectedColor = (tabName) => {
    return selectedTab === tabName
      ? 'text-blue-500 border-b-4 border-blue-500'
      : 'text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt';
  };
  return (
    <ul className="flex w-full lg:w-max items-center justify-center">
      <li className="w-1/5 md:w-max text-center">
        <HomeTab selectedState={{ setSelectedTab, selectedColor }} />
      </li>
      <li className="w-1/5 md:w-max text-center">
        <WatchTab selectedState={{ setSelectedTab, selectedColor }} />
      </li>
      <li className="w-1/5 md:w-max text-center">
        <Marketplace selectedState={{ setSelectedTab, selectedColor }} />
      </li>
      <li className="w-1/5 md:w-max text-center">
        <FriendsTab selectedState={{ setSelectedTab, selectedColor }} />
      </li>
      <li className="w-1/5 md:w-max text-center hidden md:inline-block">
        <NewsTab selectedState={{ setSelectedTab, selectedColor }} />
      </li>
      <li className="w-1/5 md:w-max text-center inline-block md:hidden">
        <SideMenuTab />
      </li>
    </ul>
  );
};

export default TabsMenu;
