import React from 'react';
import { useLocation } from 'react-router-dom';
import Feed from '../mainContent/Feed';
import Profile from '../mainContent/Profile';
import Nav from '../navbar/Nav';

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-gray-100 dark:bg-dark-main h-screen w-screen">
      {/* NavBar */}
      <Nav />
      {/* <!-- MAIN --> */}
      <div className="flex justify-center h-screen w-screen overflow-x-hidden">
        {/* <!-- LEFT MENU --> */}
        <div className="w-1/5 pt-16 h-full hidden xl:flex flex-col fixed top-0 left-0">
          <ul className="p-4">
            <li>
              <button
                type="button"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="https://robohash.org/mmm"
                  alt="Profile "
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">Tran Anh Tuat</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./assets/images/friends.png"
                  alt="Profile "
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">Friends</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./assets/images/page.png"
                  alt="Profile "
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">Pages</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./assets/images/memory.png"
                  alt="Profile "
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">Memories</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./assets/images/group.png"
                  alt="Profile "
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">Groups</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                  <i className="bx bx-chevron-down" />
                </span>
                <span className="font-semibold">See more</span>
              </button>
            </li>
            <li className="border-b border-gray-200 dark:border-dark-third mt-6" />
          </ul>
          {/* <div className="flex justify-between items-center px-4 h-4 group">
            <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">
              Your shortcuts
            </span>
            <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md hidden group-hover:inline-block">
              Edit
            </span>
          </div> */}
          {/* <ul className="p-4">
            <li>
              <button
                type="button"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./assets/images/group-img-1.jpg"
                  alt="Profile "
                  className="w-10 h-10 rounded-lg"
                />
                <span className="font-semibold">
                  Cộng đồng Front-end(HTML/CSS/JS) Việt Nam
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./assets/images/group-img-2.jpg"
                  alt="Profile "
                  className="w-10 h-10 rounded-lg"
                />
                <span className="font-semibold">CNPM08_UIT_Group học tập</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./assets/images/group-img-3.jpg"
                  alt="Profile "
                  className="w-10 h-10 rounded-lg"
                />
                <span className="font-semibold">
                  Cộng đồng UI/UX Design vietnam
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./assets/images/group-img-4.jpg"
                  alt="Profile "
                  className="w-10 h-10 rounded-lg"
                />
                <span className="font-semibold">Nihon Koi</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                  <i className="bx bx-chevron-down" />
                </span>
                <span className="font-semibold">See more</span>
              </button>
            </li>
          </ul> */}
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
