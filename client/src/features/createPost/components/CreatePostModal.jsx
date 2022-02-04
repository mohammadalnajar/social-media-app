import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import useForm from '../../../hooks/useForm';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import capitalize from '../../../utils/helpers';
import { createPost, uploadImageCloud } from '../api';
import CreatePostSelect from './CreatePostSelect';
import ImageDropzone from './ImageDropzone';
import ImagePreview from './ImagePreview';

const CreatePostModal = ({
  isOpen,
  setIsOpen,
  firstName,
  dropZone,
  children,
}) => {
  const [files, setFiles] = useState([]);
  const [img, setImg] = useState('');
  const [select, setSelect] = useState('select visibility');
  const [showDropzone, setShowDropzone] = useState(false);
  const { formData, handleInputChange, reset } = useForm({
    text: '',
  });

  const queryClient = useQueryClient();

  const addPost = useMutation(createPost, {
    onSuccess: () => {
      setFiles([]);
      reset();
      setSelect('select visibility');
      setShowDropzone(false);
      setIsOpen(false);
      // invalidate getAllPosts queries to refetch them
      queryClient.invalidateQueries('getFeedPosts');
    },
  });

  // const upload = useMutation(uploadImage, {
  //   onSuccess: (data) => {
  //     const {
  //       data: { imageUrl },
  //     } = data;
  //     const newFormData = { ...formData, visibility: select, imageUrl };
  //     addPost.mutate(newFormData);
  //   },
  // });

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
    if (!files?.length) {
      addPost.mutate({ ...formData, visibility: select });
    } else {
      // upload.mutate(files); // save on server
      uploadImgCloud.mutate(img); // save on cloud
    }
  };

  const ref = useRef();
  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  const toggleDropzone = () => {
    setShowDropzone(!showDropzone);
    if (showDropzone) {
      setFiles([]);
    }
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
                  <img
                    src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <h1 className="text-gray-900 dark:text-dark-txt font-semibold capitalize">
                  {firstName}
                </h1>
                <CreatePostSelect select={select} setSelect={setSelect} />
              </div>
            </div>
            <div className="form-control px-3 max-h-80 scrollbar-thin hover:scrollbar-thumb-gray-300 dark:hover:scrollbar-thumb-dark-hover scrollbar-track-transparent overflow-y-auto">
              <textarea
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                className="textarea h-24 textarea-ghost p-0 text-xl text-gray-900 dark:text-dark-txt placeholder:text-gray-800 focus:placeholder:text-gray-400 dark:bg-dark-second dark:focus:text-gray-200 dark:placeholder:text-gray-400 dark:focus:placeholder:text-gray-500"
                placeholder={`Whats on your mind, ${capitalize(firstName)}?`}
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
          <div className="px-3 mt-2">
            <div className="flex w-full p-2 border-[1px] border-gray-300 dark:border-dark-third rounded-lg">
              <p className="flex-1 px-2 flex items-center font-semibold dark:text-dark-txt">
                Add to your post
              </p>
              <button
                type="button"
                onClick={toggleDropzone}
                disabled={!dropZone ? 'true' : 'false'}
                aria-label="show dropzone"
                className="bx bx-images text-green-500 hover:text-green-400 px-2 flex items-center text-3xl cursor-pointer"
              />
            </div>
          </div>
          <div className="modal-action mt-4 px-3">
            <button
              type="button"
              onClick={handleSubmit}
              className={`${
                uploadImgCloud.isLoading && 'loading'
              } btn btn-block disabled:dark:text-gray-500 text-semibold capitalize text-base disabled:dark:bg-dark-third bg-btn-primary hover:bg-btn-primary-hover border-none`}
              disabled={
                select === 'select visibility' ||
                (!formData.text && !files?.length) ||
                (uploadImgCloud.isLoading && true)
              }
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

CreatePostModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  dropZone: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default CreatePostModal;
