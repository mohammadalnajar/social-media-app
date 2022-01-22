import React from 'react';
import DarkModeMoon from './components/DarkModeMoon';
import Messenger from './components/features/messenger/Messenger';
import Search from './components/features/search/Search';
import Logo from './components/Logo';
import NavWrapper from './components/NavWrapper';
import OptionsMenu from './components/optionsMenu/OptionsMenu';
import TabsMenu from './components/tabsMenu/TabsMenu';

const NavBarLayout = () => {
  return (
    <>
      {/* <!-- NAV --> */}
      <NavWrapper>
        {/* <!-- LEFT NAV --> */}
        <div className="flex items-center justify-between w-full md:w-max px-4 py-2">
          <Logo />
          <div className="flex items-center justify-between space-x-1 space-x">
            <Search />
            <Messenger extraClasses="md:hidden" />
            <DarkModeMoon extraClasses="md:hidden" />
          </div>
        </div>
        {/* <!-- END LEFT NAV --> */}

        {/* <!-- MAIN NAV --> */}
        <TabsMenu />
        {/* <!-- END MAIN NAV --> */}

        {/* <!-- RIGHT NAV --> */}
        <OptionsMenu />
        {/* <!-- END RIGHT NAV --> */}
      </NavWrapper>

      {/* <!-- END NAV --> */}
    </>
  );
};

export default NavBarLayout;
