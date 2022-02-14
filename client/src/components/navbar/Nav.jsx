import React from 'react';
import DarkModeMoon from './components/DarkModeMoon';
import Messenger from './components/features/messenger/Messenger';
import Search from './components/features/search/Search';
import Logo from './components/Logo';
import Dropdown from './components/optionsMenu/dropdown/Dropdown';
import OptionsMenu from './components/optionsMenu/OptionsMenu';
import TabsMenu from './components/tabsMenu/TabsMenu';
import './style.css';

const Nav = () => {
  return (
    <nav className="bg-white dark:bg-dark-second h-max my-auto md:h-14 w-full shadow flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 border-b dark:border-dark-third">
      <div className="flex w-full md:w-1/5 items-center justify-between  px-4 py-2">
        <Logo />
        <div className="flex items-center w-100 justify-between ">
          <Search />
          <div className="flex md:hidden justify-center">
            <Dropdown />
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
