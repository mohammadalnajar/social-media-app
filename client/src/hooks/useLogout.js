import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/api';

const useLogout = () => {
  const navigate = useNavigate();
  const logout = useMutation(logoutUser, {
    onSuccess: (data) => {
      if (data?.status === 'ok') navigate('/');
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
