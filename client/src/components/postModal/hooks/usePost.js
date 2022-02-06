import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import useForm from '../../../hooks/useForm';
import { createPost, createPostWithImages, editPost } from '../api';
import useDropZone from './useDropZone';

const usePost = ({ visibility, text, setIsOpen }) => {
  const [select, setSelect] = useState(visibility);
  const { formData, handleInputChange, reset } = useForm({
    text,
  });

  const { files, setFiles, img, setImg, showDropzone, setShowDropzone } =
    useDropZone();

  const queryClient = useQueryClient();

  const resetModal = () => {
    setFiles([]);
    reset();
    setSelect(visibility);
    setShowDropzone(false);
    setIsOpen(false);
    // invalidate getAllPosts queries to refetch them
    queryClient.invalidateQueries('getFeedPosts');
  };

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

  const addPostWithImages = useMutation(createPostWithImages, {
    onSuccess: () => {
      resetModal();
    },
  });

  useEffect(() => {
    reset();
  }, [text]);

  return {
    files,
    setFiles,
    img,
    setImg,
    select,
    setSelect,
    showDropzone,
    setShowDropzone,
    formData,
    handleInputChange,
    reset,
    addPost,
    updatePost,
    addPostWithImages,
  };
};

export default usePost;
