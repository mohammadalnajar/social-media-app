import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import CreatePostHeader from '../../../features/createPost/components/CreatePostHeader';
import CreatePostModal from '../../../features/createPost/components/CreatePostModal';
import { deletePost } from '../api';

const PostAuthorAction = ({ id, userId, text, visibility, firstName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const queryClient = useQueryClient();
  const remove = useMutation(deletePost, {
    onSuccess: () => {
      // invalidate getFeedPosts query to refetch it
      queryClient.invalidateQueries('getFeedPosts');
    },
  });

  return (
    <div className="dropdown">
      <button
        type="button"
        className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer"
      >
        <i className="bx bx-dots-horizontal-rounded" />
      </button>
      <ul className="p-2 shadow menu dropdown-content bg-base-100 dark:bg-dark-third rounded-box w-52">
        <li className="dark:hover:bg-dark-hover dark:text-gray-100">
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <i className="bx bx-edit-alt mr-2" />
            Edit post
          </button>
        </li>
        <li className="dark:hover:bg-dark-hover text-red-500">
          <button
            type="button"
            onClick={() => {
              remove.mutate({ id });
            }}
          >
            <i className="bx bx-trash mr-2" />
            Delete post
          </button>
        </li>
      </ul>
      <CreatePostModal
        method="PUT"
        postData={{ id, userId, text, visibility }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        firstName={firstName}
        dropZone={false}
      >
        <CreatePostHeader toggleModal={toggleModal} title="Create post" />
      </CreatePostModal>
    </div>
  );
};

PostAuthorAction.propTypes = {
  id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  visibility: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
};

export default PostAuthorAction;
