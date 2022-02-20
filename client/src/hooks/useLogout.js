import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/api';

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const logout = useMutation(logoutUser, {
    onSuccess: (data) => {
      if (data?.status === 'ok') navigate('/');
      queryClient.removeQueries('fetchUser', { exact: true });
    },
    onError: (err) => {
      if (err.status === 'not authenticated') navigate('/');
    },
  });
  const logoutUserOnClick = () => {
    logout.mutate();
  };

  return { logoutUserOnClick };
};

export default useLogout;
