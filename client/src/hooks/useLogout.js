import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/api';

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const navigateToLogin = (error) => {
    if (error.status === 'not authenticated') {
      navigate('/');
    }
  };
  const logout = useMutation(logoutUser, {
    onSuccess: (data) => {
      if (data?.status === 'ok') navigate('/');
      queryClient.removeQueries('fetchUser', { exact: true });
    },
    onError: (err) => {
      navigateToLogin(err);
    },
  });
  const logoutUserOnClick = () => {
    logout.mutate();
  };

  return { logoutUserOnClick, navigateToLogin };
};

export default useLogout;
