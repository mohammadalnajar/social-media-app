import { useMutation, useQueryClient } from 'react-query';
import { dislikePost } from '../api';

const useDislike = () => {
  const queryClient = useQueryClient();
  const invalidateQuery = () => {
    queryClient.invalidateQueries('getDislikes');
  };
  const addDislike = useMutation(dislikePost, {
    onSuccess: () => {
      invalidateQuery();
    },
  });

  return { addDislike };
};

export default useDislike;
