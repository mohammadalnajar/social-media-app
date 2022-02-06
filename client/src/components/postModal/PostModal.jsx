import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Avatar from '../Avatar';
import useForm from '../../hooks/useForm';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {
  createPost,
  createPostWithImages,
  editPost,
  uploadImageCloud,
} from './api';
import PostModalSelect from './PostModalSelect';
import ImageDropzone from './ImageDropzone';
import ImagePreview from './ImagePreview';
import PostModalTextArea from './PostModalTextArea';
import OpenDropzoneButton from './OpenDropzoneButton';
import SubmitButton from './SubmitButton';

const PostModal = ({
  isOpen,
  setIsOpen,
  dropZone,
  method,
  postData: { visibility, text, id, userID },
  children,
}) => {
  const [files, setFiles] = useState([]);
  const [img, setImg] = useState('');
  const [select, setSelect] = useState(visibility);
  const [showDropzone, setShowDropzone] = useState(false);
  const { formData, handleInputChange, reset } = useForm({
    text,
  });

  const {
    data: { data: userData },
  } = useQuery('fetchUser');

  const queryClient = useQueryClient();

  const resetModal = () => {
    setFiles([]);
    reset();
    setSelect('select visibility');
    setShowDropzone(false);
    setIsOpen(false);
    // invalidate getAllPosts queries to refetch them
    queryClient.invalidateQueries('getFeedPosts');
  };

  const addPostWithImages = useMutation(createPostWithImages, {
    onSuccess: () => {
      resetModal();
    },
  });

  const addPost = useMutation(createPost, {
    onSuccess: () => {
      resetModal();
    },
  });

  const updatePost = useMutation(editPost, {
    onSuccess: () => {
      resetModal();
    },
  });

  const uploadImgCloud = useMutation(uploadImageCloud, {
    onSuccess: (data) => {
      const {
        data: { imageUrl, imagePublicId },
      } = data;
      const newFormData = {
        ...formData,
        visibility: select,
        imageUrl,
        imagePublicId,
      };
      addPost.mutate(newFormData);
    },
  });

  const handleSubmit = () => {
    if (method === 'POST') {
      if (!files?.length) {
        addPost.mutate({ ...formData, visibility: select });
      } else {
        // upload.mutate(files); // save on server
        // uploadImgCloud.mutate(img); // save on cloud
        const newFormData = {
          ...formData,
          visibility: select,
          imageData: img,
        };
        addPostWithImages.mutate(newFormData);
      }
    } else if (method === 'PUT') {
      updatePost.mutate({ ...formData, visibility: select, id, userID });
    }
  };

  const ref = useRef();
  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  const isLoading = () => {
    if (
      uploadImgCloud.isLoading ||
      addPost.isLoading ||
      updatePost.isLoading ||
      addPostWithImages.isLoading
    )
      return true;
    return false;
  };
  const isFormFilled = () => {
    if (select === 'select visibility' || (!formData.text && !files?.length))
      return false;
    return true;
  };

  return (
    <>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
        <div ref={ref} className="modal-box dark:bg-dark-second">
          <div className="card overflow-visible">
            {children}
            <div className="divider dark:before:bg-dark-third dark:after:bg-dark-third my-2" />
            <div className="flex px-3 max-h-16">
              <div className="avatar">
                <div className="mb-8 rounded-full w-14 h-14">
                  <Avatar imageUrl={userData.profileImageUrl} />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <h1 className="text-gray-900 dark:text-dark-txt font-semibold capitalize">
                  {userData.firstName}
                </h1>
                <PostModalSelect select={select} setSelect={setSelect} />
              </div>
            </div>
            <div className="form-control px-3 max-h-80 scrollbar-thin hover:scrollbar-thumb-gray-300 dark:hover:scrollbar-thumb-dark-hover scrollbar-track-transparent overflow-y-auto">
              <PostModalTextArea
                text={formData.text}
                handleInputChange={handleInputChange}
                firstName={userData.firstName}
              />
              {showDropzone && (
                <ImageDropzone
                  setImg={setImg}
                  files={files}
                  setFiles={setFiles}
                >
                  <ImagePreview files={files} setFiles={setFiles} />
                </ImageDropzone>
              )}
            </div>
          </div>
          {dropZone && (
            <OpenDropzoneButton
              setShowDropzone={setShowDropzone}
              showDropzone={showDropzone}
              setFiles={setFiles}
            />
          )}
          <SubmitButton
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            isFormFilled={isFormFilled}
            method={method}
          />
        </div>
      </div>
    </>
  );
};

PostModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  dropZone: PropTypes.bool.isRequired,
  method: PropTypes.string.isRequired,
  postData: PropTypes.shape({
    visibility: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
    userID: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

PostModal.defaultProps = {
  postData: {
    visibility: 'select visibility',
    text: '',
    id: '',
    userID: '',
  },
};

export default PostModal;
