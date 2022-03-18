import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import useLogout from '../../../hooks/useLogout';
import { dislikePost, likePost } from '../api';

const useAction = ({ likes, dislikes, postId }) => {
  const {
    data: {
      data: { _id: userId },
    },
  } = useQuery('fetchUser');
  const { navigateToLogin } = useLogout();
  const userLikedOrDislikedPostCheck = (arr) => {
    let check = false;
    arr?.forEach((action) => {
      if (action?.userId === userId) {
        check = true;
      }
    });
    return check;
  };

  const [checked, setChecked] = useState(() => {
    if (likes) {
      return userLikedOrDislikedPostCheck(likes);
    }
    if (dislikes) {
      return userLikedOrDislikedPostCheck(dislikes);
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

  const likeOrUnlikePost = useMutation(likePost, {
    onSuccess: () => {
      toggleChecked();
      invalidateStatsQuery();
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  const dislikeOrUnDislikePost = useMutation(dislikePost, {
    onSuccess: () => {
      toggleChecked();
      invalidateStatsQuery();
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  const likeOrDislike = () => {};

  return {
    likeOrUnlikePost,
    dislikeOrUnDislikePost,
    likeOrDislike,
    checked,
    toggleChecked,
  };
};

export default useAction;
