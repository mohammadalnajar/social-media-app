import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import useLogout from '../../../hooks/useLogout';
import PostModal from '../../postModal/PostModal';
import PostModalHeader from '../../postModal/PostModalHeader';
import { deletePost } from '../api';

const PostAuthorAction = ({ id, userId, text, visibility, firstName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { navigateToLogin } = useLogout();
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const queryClient = useQueryClient();
  const remove = useMutation(deletePost, {
    onSuccess: () => {
      // invalidate getFeedPosts query to refetch it
      queryClient.invalidateQueries('getFeedPosts');
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  return (
    <div className="dropdown dropdown-end">
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
            className="btn bg-transparent border-0 dark:hover:bg-dark-hover"
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
            className={`${
              remove.isLoading && 'loading'
            } btn bg-transparent border-0 dark:hover:bg-dark-hover`}
          >
            <i className="bx bx-trash mr-2" />
            Delete post
          </button>
        </li>
      </ul>
      <PostModal
        method="PUT"
        postData={{ id, userId, text, visibility }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        firstName={firstName}
        dropZone={false}
      >
        <PostModalHeader toggleModal={toggleModal} title="Edit post" />
      </PostModal>
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
