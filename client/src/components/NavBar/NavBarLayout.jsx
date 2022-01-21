import React from 'react';
import Messenger from './components/features/messenger/Messenger';
import Search from './components/features/search/Search';
import Logo from './components/Logo';
import NavWrapper from './components/NavWrapper';

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
            <Messenger />
            <div
              className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt"
              id="dark-mode-toggle-mb"
            >
              <i className="bx bxs-moon" />
            </div>
          </div>
        </div>
        {/* <!-- END LEFT NAV --> */}

        {/* <!-- MAIN NAV --> */}
        <ul className="flex w-full lg:w-max items-center justify-center">
          <li className="w-1/5 md:w-max text-center">
            <button
              type="button"
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block text-blue-500 border-b-4 border-blue-500"
            >
              <i className="bx bxs-home" />
            </button>
          </li>
          <li className="w-1/5 md:w-max text-center">
            <div
              type="button"
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <i className="bx bx-movie-play" />
              <span className="text-xs absolute top-1 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                9+
              </span>
            </div>
          </li>
          <li className="w-1/5 md:w-max text-center">
            <button
              type="button"
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <i className="bx bx-store" />
            </button>
          </li>
          <li className="w-1/5 md:w-max text-center">
            <button
              type="button"
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <i className="bx bx-group" />
            </button>
          </li>
          <li className="w-1/5 md:w-max text-center hidden md:inline-block">
            <button
              type="button"
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <i className="bx bx-layout" />
              <span className="text-xs absolute top-1 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                9+
              </span>
            </button>
          </li>
          <li className="w-1/5 md:w-max text-center inline-block md:hidden">
            <button
              type="button"
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <i className="bx bx-menu" />
            </button>
          </li>
        </ul>
        {/* <!-- END MAIN NAV --> */}

        {/* <!-- RIGHT NAV --> */}
        <ul className="hidden md:flex mx-4 items-center justify-center">
          <li className="h-full hidden xl:flex">
            <button
              type="button"
              href="#"
              className="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
            >
              <img
                src="./assets/images/tuat.jpg"
                alt=""
                className="rounded-full h-7 w-7"
              />
              <span className="mx-2 font-semibold dark:text-dark-txt">
                Tuat
              </span>
            </button>
          </li>
          <li>
            <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bx-plus" />
            </div>
          </li>
          <li>
            <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bxl-messenger" />
            </div>
          </li>
          <li>
            <div className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bxs-bell" />
              <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                9
              </span>
            </div>
          </li>
          <li>
            <div
              className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative"
              id="dark-mode-toggle"
            >
              <i className="bx bxs-moon" />
            </div>
          </li>
        </ul>
        {/* <!-- END RIGHT NAV --> */}
      </NavWrapper>

      {/* <!-- END NAV --> */}
    </>
  );
};

export default NavBarLayout;
