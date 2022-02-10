import React from 'react';
import DarkModeMoon from './components/DarkModeMoon';
import Messenger from './components/features/messenger/Messenger';
import Search from './components/features/search/Search';
import Logo from './components/Logo';
import OptionsMenu from './components/optionsMenu/OptionsMenu';
import TabsMenu from './components/tabsMenu/TabsMenu';
import './style.css';

const Nav = () => {
  return (
    <nav className="bg-white dark:bg-dark-second h-max my-auto md:h-14 w-full shadow flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 border-b dark:border-dark-third">
      <div className="flex items-center justify-between w-full md:w-max px-4 py-2">
        <Logo />
        <div className="flex items-center justify-between space-x-1 space-x">
          <Search />
          <div className="flex md:hidden">
            <Messenger />
            <DarkModeMoon />
          </div>
        </div>
      </div>
      <TabsMenu />
      <OptionsMenu />
    </nav>
  );
};

export default Nav;
