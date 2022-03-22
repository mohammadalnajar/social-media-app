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
    if (likes && dislikes) {
      return {
        liked: userLikedOrDislikedPostCheck(likes),
        disliked: userLikedOrDislikedPostCheck(dislikes),
      };
    }
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
      likeOrUnlikePost.mutate({ postId, like: false });
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  const likeOrDislike = (data) => {
    const { like, dislike } = data;
    if (dislike !== undefined) {
      console.log(dislike, '1=============');
      dislikeOrUnDislikePost.mutate(data);

      return;
    }
    if (like !== undefined) {
      console.log(like, '2============');
      // likeOrUnlikePost.mutate(data);
      // dislikeOrUnDislikePost.mutate(data);
    }
  };

  return {
    likeOrUnlikePost,
    dislikeOrUnDislikePost,
    likeOrDislike,
    checked,
    toggleChecked,
  };
};

export default useAction;
