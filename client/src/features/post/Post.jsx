import React from 'react';
import { useQuery } from 'react-query';
import { fetchUser } from '../../utils/api';
import QuickShareButton from './components/QuickShareButton';

const Post = () => {
  const {
    data: {
      data: { firstName },
    },
  } = useQuery('fetchUser', fetchUser, {
    retry: 0,
  });

  return (
    <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
      <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
        <img
          src="./assets/images/tuat.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full hover:opacity-80 hover:cursor-pointer"
        />
        <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt hover:bg-gray-300 dark:hover:bg-dark-hover">
          <span>
            Whats on your mind, <span className="capitalize">{firstName}</span>?
          </span>
        </div>
      </div>
      <div className="p-2 flex">
        <QuickShareButton
          title="Live Video"
          iconType="bxs-video-plus"
          color="text-rose-500"
        />
        <QuickShareButton
          title="Photo/video"
          iconType="bx-images"
          color="text-green-500"
        />
        <QuickShareButton
          title="Feeling/activity"
          iconType="bx-smile"
          color="text-yellow-400"
        />
      </div>
    </div>
  );
};

export default Post;
