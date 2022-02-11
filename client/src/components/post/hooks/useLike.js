import { useMutation, useQueryClient } from 'react-query';
import { likePost } from '../api';

const useLike = () => {
  const queryClient = useQueryClient();

  const invalidateQuery = () => {
    queryClient.invalidateQueries('getLikes');
  };
  const addLike = useMutation(likePost, {
    onSuccess: () => {
      invalidateQuery();
    },
  });

  return { addLike };
};

export default useLike;
