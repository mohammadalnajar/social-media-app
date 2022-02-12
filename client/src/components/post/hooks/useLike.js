import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { likePost } from '../api';

const useLike = ({ likes }) => {
  const {
    data: {
      data: { _id: userId },
    },
  } = useQuery('fetchUser');

  const userLikePostCheck = () => {
    let check = false;
    likes?.forEach((like) => {
      if (like?.userId === userId) {
        check = true;
      }
    });
    return check;
  };

  const [checked, setChecked] = useState(userLikePostCheck());
  const toggleChecked = () => {
    setChecked(!checked);
  };
  const queryClient = useQueryClient();

  const invalidateQuery = () => {
    queryClient.invalidateQueries('getFeedPosts');
  };

  const likeOrUnlikePost = useMutation(likePost, {
    onSuccess: () => {
      toggleChecked();
      invalidateQuery();
    },
  });

  return { likeOrUnlikePost, checked, toggleChecked };
};

export default useLike;
