import React from 'react';
import FriendsTab from './FriendsTab';
import HomeTab from './HomeTab';
import Marketplace from './MarketplaceTab';
import NewsTab from './NewsTab';
import SideMenuTab from './SideMenuTab';
import WatchTab from './WatchTab';

const TabsMenu = () => {
  return (
    <ul className="flex w-full lg:w-max items-center justify-center">
      <li className="w-1/5 md:w-max text-center">
        <HomeTab />
      </li>
      <li className="w-1/5 md:w-max text-center">
        <WatchTab />
      </li>
      <li className="w-1/5 md:w-max text-center">
        <Marketplace />
      </li>
      <li className="w-1/5 md:w-max text-center">
        <FriendsTab />
      </li>
      <li className="w-1/5 md:w-max text-center hidden md:inline-block">
        <NewsTab />
      </li>
      <li className="w-1/5 md:w-max text-center inline-block md:hidden">
        <SideMenuTab />
      </li>
    </ul>
  );
};

export default TabsMenu;
