import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import useLogout from '../../../../../hooks/useLogout';
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

  const setCheckedState = () => {
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
  };

  const [checked, setChecked] = useState(setCheckedState);

  useEffect(() => {
    setChecked(setCheckedState);
  }, [likes, dislikes]);

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

  const likeOrDislike = (data) => {
    const { like, dislike } = data;

    if (dislike !== undefined) {
      // dislike button clicked
      dislikeOrUnDislikePost.mutate(data);
      if (dislike) {
        // user wants to dislike post so remove like
        likeOrUnlikePost.mutate({ postId, like: false });
      }
      return;
    }
    if (like !== undefined) {
      // like button clicked
      likeOrUnlikePost.mutate(data);
      if (like) {
        // user wants to like post so remove dislike
        dislikeOrUnDislikePost.mutate({ postId, dislike: false });
      }
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
