/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import useForm from '../../../../../hooks/useForm';
import useLogout from '../../../../../hooks/useLogout';
import {
  createComment,
  deleteComment,
  likeComment,
  updateComment,
} from '../api';

const useComment = ({ postId, defaultTextVal, close, likes }) => {
  const {
    data: { data: userData },
  } = useQuery('fetchUser');
  const { navigateToLogin } = useLogout();

  const { formData, handleInputChange, reset } = useForm({
    text: defaultTextVal,
  });

  const checkUserLikedComment = (arr) => {
    let check = false;
    arr?.forEach((action) => {
      if (action?.userId === userData._id) {
        check = true;
      }
    });
    return check;
  };

  const [checked, setChecked] = useState(() => {
    if (likes) {
      return checkUserLikedComment(likes);
    }
    return false;
  });

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const queryClient = useQueryClient();

  const invalidateStatsQuery = () => {
    queryClient.invalidateQueries(`getPostStats-${postId}`);
  };

  const postComment = useMutation(createComment, {
    onSuccess: () => {
      invalidateStatsQuery();
      reset();
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  const editComment = useMutation(updateComment, {
    onSuccess: () => {
      invalidateStatsQuery();
      reset();
      if (close) close(); // to close the editComment component when the comment is updated
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  const removeComment = useMutation(deleteComment, {
    onSuccess: () => {
      invalidateStatsQuery();
      reset();
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  const likeAComment = useMutation(likeComment, {
    onSuccess: () => {
      toggleChecked();
      invalidateStatsQuery();
      reset();
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  return {
    userData,
    postComment,
    editComment,
    removeComment,
    likeAComment,
    formData,
    handleInputChange,
    reset,
    checked,
    toggleChecked,
  };
};

export default useComment;
