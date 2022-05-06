import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../navbar/components/Logo';
import DarkModeMoon from './components/DarkModeMoon';
import LogoutButton from './components/LogoutButton';
import SidebarButton from './components/SidebarButton';

const LeftSidebar = () => {
  const [selected, setSelected] = useState('');
  const { pathname } = useLocation();
  const currPage = pathname.split('/')[1];

  useEffect(() => {
    setSelected(currPage);
  }, [currPage]);

  return (
    <div className="w-80 h-full hidden xl:flex flex-col justify-between fixed top-0 left-0 border border-red-600">
      <div className="flex flex-col py-10 px-10">
        <Logo />
        <div className="py-6 my-4">
          <div>
            <SidebarButton
              selected={selected}
              setSelected={setSelected}
              option="feed"
            >
              <i className="fa-solid fa-newspaper text-xl" />
            </SidebarButton>
          </div>
          <div>
            <SidebarButton
              selected={selected}
              setSelected={setSelected}
              option="profile"
            >
              <i className="fa-solid fa-user text-xl" />
            </SidebarButton>
          </div>
          <div>
            <SidebarButton
              selected={selected}
              setSelected={setSelected}
              option="Friends"
            >
              <i className="fa-solid fa-user-group text-xl" />
            </SidebarButton>
          </div>
          <div>
            <SidebarButton
              selected={selected}
              setSelected={setSelected}
              option="settings"
            >
              <i className="fa-solid fa-gear text-xl" />
            </SidebarButton>
          </div>

          <div className="border-b border-gray-200 dark:border-dark-third mt-6" />
        </div>
      </div>
      <div className="flex p-12 items-center justify-between">
        <div className="col">
          <LogoutButton />
        </div>
        <div className="col">
          <DarkModeMoon />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
