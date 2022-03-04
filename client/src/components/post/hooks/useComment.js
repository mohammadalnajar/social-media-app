import { useMutation, useQuery, useQueryClient } from 'react-query';
import useForm from '../../../hooks/useForm';
import useLogout from '../../../hooks/useLogout';
import { createComment, deleteComment, updateComment } from '../api';

const useComment = ({ postId, defaultTextVal, close }) => {
  const {
    data: { data: userData },
  } = useQuery('fetchUser');
  const { navigateToLogin } = useLogout();
  const { formData, handleInputChange, reset } = useForm({
    text: defaultTextVal,
  });

  const queryClient = useQueryClient();

  const invalidateStatsQuery = () => {
    queryClient.invalidateQueries(`getPostStats-${postId}`);
  };

  const postComment = useMutation(createComment, {
    onSuccess: () => {
      invalidateStatsQuery();
      reset();
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  const editComment = useMutation(updateComment, {
    onSuccess: () => {
      invalidateStatsQuery();
      reset();
      if (close) close(); // to close the editComment component when the comment is updated
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  const removeComment = useMutation(deleteComment, {
    onSuccess: () => {
      invalidateStatsQuery();
      reset();
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  return {
    userData,
    postComment,
    editComment,
    removeComment,
    formData,
    handleInputChange,
    reset,
  };
};

export default useComment;
