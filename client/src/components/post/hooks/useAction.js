import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { dislikePost, likePost } from '../api';

const useAction = ({ likes, dislikes, postId }) => {
  const {
    data: {
      data: { _id: userId },
    },
  } = useQuery('fetchUser');
  const navigate = useNavigate();
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

  const invalidateLikesQuery = () => {
    queryClient.invalidateQueries(`getLikes-${postId}`);
  };

  const invalidateDislikesQuery = () => {
    queryClient.invalidateQueries(`getDislikes-${postId}`);
  };

  const likeOrUnlikePost = useMutation(likePost, {
    onSuccess: () => {
      toggleChecked();
      invalidateLikesQuery();
    },
    onError: (error) => {
      if (error.status === 'not authenticated') {
        navigate('/');
      }
    },
  });

  const dislikeOrUnDislikePost = useMutation(dislikePost, {
    onSuccess: () => {
      toggleChecked();
      invalidateDislikesQuery();
    },
    onError: (error) => {
      if (error.status === 'not authenticated') {
        navigate('/');
      }
    },
  });

  return { likeOrUnlikePost, dislikeOrUnDislikePost, checked, toggleChecked };
};

export default useAction;
