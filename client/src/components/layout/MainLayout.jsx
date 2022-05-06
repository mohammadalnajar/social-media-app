import React from 'react';
import { useLocation } from 'react-router-dom';
import LeftSidebar from '../leftsidebar/LeftSidebar';
import Feed from '../mainContent/Feed';
import Profile from '../mainContent/Profile';
// import Logo from '../navbar/components/Logo';
// import Nav from '../navbar/Nav';

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-gray-100 dark:bg-dark-main h-screen w-screen">
      {/* NavBar
      <Nav /> */}
      {/* <!-- MAIN --> */}
      <div className="flex justify-center h-screen w-screen overflow-x-hidden">
        {/* <!-- LEFT MENU --> */}
        <div className="w-72 pt-16 h-full hidden xl:flex flex-col fixed top-0 left-0 border border-red-600">
          <LeftSidebar />

          <div className="mt-auto p-6 text-sm text-gray-500 dark:text-dark-txt">
            <button type="button">Privacy</button>
            <span>.</span>
            <button type="button">Terms</button>
            <span>.</span>
            <button type="button">Advertising</button>
            <span>.</span>
            <button type="button">Cookies</button>
            <span>.</span>
            <button type="button">Ad choices</button>
            <span>.</span>
            <button type="button">More</button>
            <span>.</span>
            <span>Facebook © 2021</span>
          </div>
        </div>
        {/* <!-- END LEFT MENU --> */}

        {/* <!-- MAIN CONTENT --> */}
        {pathname.includes('feed') && <Feed />}

        {pathname.includes('profile') && <Profile />}
        {/* <!-- END MAIN CONTENT --> */}
        {/* <!-- RIGHT MENU --> */}
        <div className="w-1/5 pt-16 h-full hidden xl:block px-4 fixed top-0 right-5">
          <div className="h-full">
            <div className="flex justify-between items-center px-4 pt-4">
              <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">
                Firend requests
              </span>
              <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md">
                See All
              </span>
            </div>
            <div className="p-2">
              <button
                type="button"
                href="#"
                className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg transition-all"
              >
                <img
                  src="https://robohash.org/wrq"
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1 h-full">
                  <div className="dark:text-dark-txt">
                    <span className="font-semibold">Sakura Hinata</span>
                    <span className="float-right">6d</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div className="w-1/2 bg-blue-500 cursor-pointer py-1 text-center font-semibold text-white rounded-lg">
                      Confirm
                    </div>
                    <div className="w-1/2 bg-gray-300 cursor-pointer py-1 text-center font-semibold text-black rounded-lg">
                      Delete
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="border-b border-gray-200 dark:border-dark-third mt-6" />
            {/* <!-- CONTACTS --> */}
            <div className="flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt">
              <span className="font-semibold text-lg">Contacts</span>
              <div className="flex space-x-1">
                <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                  <i className="bx bx-search-alt-2" />
                </div>
                <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                  <i className="bx bx-dots-horizontal-rounded" />
                </div>
              </div>
            </div>
            <ul className="p-2">
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/bvc"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Chin Chin</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/hgjgh"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Tuat TA</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/dbcfd"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">John Doe</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/kj"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Ivan Lorem</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/uyiy"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Shiba san</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/mjl"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">John Doe</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/mjiutrmm"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Ivan Lorem</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/cxvd"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Shiba san</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/vbhy"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">John Doe</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/wqe"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Ivan Lorem</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/bmj"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Shiba san</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/eqwewq"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">John Doe</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://robohash.org/iuyu"
                      alt="Friends profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Ivan Lorem</span>
                  </div>
                </div>
              </li>
            </ul>
            {/* <!-- END CONTACTS --> */}
          </div>
        </div>
        {/* <!-- END RIGHT MENU --> */}
      </div>
      {/* <!-- END MAIN --> */}
    </div>
  );
};

export default MainLayout;
