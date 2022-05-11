import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import useWindowSize from '../../hooks/useWindowSize';
import Logo from '../navbar/components/Logo';
import DarkModeMoon from './components/DarkModeMoon';
import LogoutButton from './components/LogoutButton';
import SidebarButton from './components/SidebarButton';

const LeftSidebar = () => {
  const [selected, setSelected] = useState('');
  const { pathname } = useLocation();
  const currPage = pathname.split('/')[1];
  const screenSize = useWindowSize();
  const xlgScreen = screenSize.width >= 1280;
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setSelected(currPage);
  }, [currPage]);

  return (
    <div>
      {!xlgScreen && (
        <div className="absolute top-0 left-0 p-2 rounded z-10 w-full dark:bg-dark-third">
          <Hamburger
            duration={0.3}
            toggled={isOpen}
            toggle={setOpen}
            color="#22C55E"
          />
        </div>
      )}
      <div
        className={`w-80 bg-white dark:bg-dark-second h-full flex transition-all  ${
          !xlgScreen && !isOpen && '-translate-x-80'
        }  z-10 flex-col justify-between fixed top-0 left-0 overflow-auto`}
      >
        {!xlgScreen && (
          <div className="absolute top-2 left-60">
            <Hamburger
              duration={0.3}
              toggled={isOpen}
              toggle={setOpen}
              color="#22C55E"
            />
          </div>
        )}

        <div className="flex flex-col py-10 px-10">
          <Logo />
          <div className="py-6 my-4">
            <div>
              <SidebarButton
                selected={selected}
                setSelected={setSelected}
                toggleSidebar={setOpen}
                option="feed"
              >
                <i className="fa-solid fa-newspaper text-xl" />
              </SidebarButton>
            </div>
            <div>
              <SidebarButton
                selected={selected}
                setSelected={setSelected}
                toggleSidebar={setOpen}
                option="profile"
              >
                <i className="fa-solid fa-user text-xl" />
              </SidebarButton>
            </div>
            <div>
              <SidebarButton
                selected={selected}
                setSelected={setSelected}
                toggleSidebar={setOpen}
                option="friends"
              >
                <i className="fa-solid fa-user-group text-xl" />
              </SidebarButton>
            </div>
            <div>
              <SidebarButton
                selected={selected}
                setSelected={setSelected}
                toggleSidebar={setOpen}
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
    </div>
  );
};

export default LeftSidebar;
