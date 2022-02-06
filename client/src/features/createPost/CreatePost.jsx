import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Avatar from '../../components/Avatar';
import PostModal from '../../components/postModal/PostModal';
import PostModalHeader from '../../components/postModal/PostModalHeader';
import QuickShareButton from './QuickShareButton';

const CreatePost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: { data: userData },
  } = useQuery('fetchUser');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
      <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
        <Avatar imageUrl={userData.profileImageUrl} />
        <div
          role="button"
          tabIndex="0"
          onClick={toggleModal}
          onKeyDown={toggleModal}
          className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt hover:bg-gray-300 dark:hover:bg-dark-hover"
        >
          <p className="text-xs xs:text-sm">
            Whats on your mind,
            <span className="capitalize ml-1">{userData.firstName}</span>?
          </p>
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
      <PostModal method="POST" isOpen={isOpen} setIsOpen={setIsOpen} dropZone>
        <PostModalHeader toggleModal={toggleModal} title="Create post" />
      </PostModal>
    </div>
  );
};

export default CreatePost;
