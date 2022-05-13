import React from 'react';

const UserStories = () => {
  return (
    <div className="relative flex space-x-2 pt-4">
      <div className="w-1/4 sm:w-1/6 h-44 rounded-xl shadow overflow-hidden flex flex-col group cursor-pointer">
        <div className="h-3/5 overflow-hidden">
          <img
            src="https://robohash.org/mcdd"
            alt="profile"
            className="group-hover:transform group-hover:scale-110 transition-all duration-700"
          />
        </div>
        <div className="flex-1 relative flex items-end justify-center pb-2 text-center leading-none dark:bg-dark-second dark:text-dark-txt">
          <span className="font-semibold">
            Create a <br /> Story
          </span>
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white grid place-items-center text-2xl border-4 border-white dark:border-dark-second absolute -top-5 left-1/2 transform -translate-x-1/2">
            <i className="bx bx-plus" />
          </div>
        </div>
      </div>
      <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
        <div className="relative h-full group cursor-pointer">
          <img
            src="./assets/images/story.jpg"
            alt="Story images"
            className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full object-cover"
          />
          <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10" />
          <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
            Your story
          </span>
          <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
            <img src="./assets/images/tuat.jpg" alt="Profile" />
          </div>
        </div>
      </div>
      <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
        <div className="relative h-full group cursor-pointer">
          <img
            src="./assets/images/story-1.jpg"
            alt="Story images"
            className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full object-cover"
          />
          <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10" />
          <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
            Lorem
          </span>
          <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
            <img src="./assets/images/avt-7.jpg" alt="Profile" />
          </div>
        </div>
      </div>
      <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
        <div className="relative h-full group cursor-pointer">
          <img
            src="./assets/images/story-2.jpg"
            alt="Story images"
            className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full object-cover"
          />
          <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10" />
          <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
            John Doe
          </span>
          <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
            <img src="./assets/images/avt-6.png" alt="Profile" />
          </div>
        </div>
      </div>
      <div className="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
        <div className="relative h-full group cursor-pointer">
          <img
            src="./assets/images/story-3.jpg"
            alt="Story images"
            className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full object-cover"
          />
          <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10" />
          <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
            John Doe
          </span>
          <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
            <img src="./assets/images/avt-6.png" alt="Profile" />
          </div>
        </div>
      </div>
      <div className="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
        <div className="relative h-full group cursor-pointer">
          <img
            src="./assets/images/story-4.jpg"
            alt="Story images"
            className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full object-cover"
          />
          <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10" />
          <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
            John Doe
          </span>
          <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
            <img src="./assets/images/avt-5.jpg" alt="Profile" />
          </div>
        </div>
      </div>
      <div className="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl bg-white absolute -right-6 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow text-gray-500 dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
        <i className="bx bx-right-arrow-alt" />
      </div>
    </div>
  );
};

export default UserStories;
