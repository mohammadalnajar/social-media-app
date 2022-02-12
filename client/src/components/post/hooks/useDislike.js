import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { dislikePost } from '../api';

const useDislike = ({ dislikes, postId }) => {
  const {
    data: {
      data: { _id: userId },
    },
  } = useQuery('fetchUser');

  const userDislikePostCheck = () => {
    let check = false;
    dislikes?.forEach((dislike) => {
      if (dislike?.userId === userId) {
        check = true;
      }
    });
    return check;
  };

  const [checked, setChecked] = useState(() => {
    return userDislikePostCheck();
  });
  const toggleChecked = () => {
    setChecked(!checked);
  };
  const queryClient = useQueryClient();

  const invalidateQuery = () => {
    queryClient.invalidateQueries(`getDislikes-${postId}`);
  };

  const dislikeOrUnDislikePost = useMutation(dislikePost, {
    onSuccess: () => {
      toggleChecked();
      invalidateQuery();
    },
  });

  return { dislikeOrUnDislikePost, checked, toggleChecked };
};

export default useDislike;
