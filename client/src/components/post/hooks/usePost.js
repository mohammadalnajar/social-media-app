import { useMutation, useQueryClient } from 'react-query';
import useLogout from '../../../hooks/useLogout';
import { deletePost } from '../api';

const usePost = () => {
  const { navigateToLogin } = useLogout();

  const queryClient = useQueryClient();

  const removePost = useMutation(deletePost, {
    onSuccess: () => {
      // invalidate getFeedPosts query to refetch it
      queryClient.invalidateQueries('getFeedPosts');
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  return { removePost };
};

export default usePost;
