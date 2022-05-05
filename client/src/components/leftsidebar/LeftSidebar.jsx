import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../navbar/components/Logo';
import SidebarButton from './components/SidebarButton';

const LeftSidebar = () => {
  const [selected, setSelected] = useState('');
  const { pathname } = useLocation();
  const currPage = pathname.split('/')[1];

  useEffect(() => {
    setSelected(currPage);
  }, [currPage]);

  return (
    <div className="flex flex-col p-6">
      <Logo />
      <div className="py-4">
        <div>
          <SidebarButton
            selected={selected}
            setSelected={setSelected}
            srcImage="/assets/images/category.png"
            option="feed"
          />
        </div>
        <div>
          <SidebarButton
            selected={selected}
            setSelected={setSelected}
            srcImage="/assets/images/user.png"
            option="profile"
          />
        </div>
        <div>
          <SidebarButton
            selected={selected}
            setSelected={setSelected}
            srcImage="/assets/images/friends.png"
            option="Friends"
          />
        </div>
        <div>
          <SidebarButton
            selected={selected}
            setSelected={setSelected}
            srcImage="/assets/images/setting.png"
            option="settings"
          />
        </div>

        <div className="border-b border-gray-200 dark:border-dark-third mt-6" />
      </div>
    </div>
  );
};

export default LeftSidebar;
