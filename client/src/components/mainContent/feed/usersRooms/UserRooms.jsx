import React from 'react';

const UserRooms = () => {
  return (
    <div className="p-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second overflow-hidden">
      <div className="flex space-x-4 relative">
        <div className="w-1/2 lg:w-3/12 flex space-x-2 items-center justify-center border-2 border-blue-200 dark:border-blue-700 rounded-full cursor-pointer">
          <i className="bx bxs-video-plus text-2xl text-purple-500" />
          <span className="text-sm font-semibold text-blue-500">
            Create Room
          </span>
        </div>
        <div className="relative cursor-pointer">
          <img
            src="https://robohash.org/vvvv"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div className="relative cursor-pointer">
          <img
            src="https://robohash.org/mmm"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div className="relative cursor-pointer">
          <img
            src="https://robohash.org/dswed"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div className="relative cursor-pointer">
          <img
            src="https://robohash.org/vfbd"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div className="relative cursor-pointer hidden sm:inline">
          <img
            src="https://robohash.org/xxxx"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div className="relative cursor-pointer hidden sm:inline">
          <img
            src="https://robohash.org/dmmm"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div className="relative cursor-pointer hidden sm:inline">
          <img
            src="https://robohash.org/dmsmm"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div className="relative cursor-pointer hidden sm:inline">
          <img
            src="https://robohash.org/csssx"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div className="relative cursor-pointer hidden sm:inline">
          <img
            src="https://robohash.org/sdew"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div className="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl text-gray-500 bg-white absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
          <i className="bx bxs-chevron-right" />
        </div>
      </div>
    </div>
  );
};

export default UserRooms;
