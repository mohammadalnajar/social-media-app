import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import useLogout from '../../../hooks/useLogout';
import { createComment, deleteComment, updateComment } from '../api';

const useComment = ({ postId, defaultTextVal, close }) => {
  const {
    data: { data: userData },
  } = useQuery('fetchUser');
  const navigate = useNavigate();
  const { navigateToLogin } = useLogout();
  const { formData, handleInputChange, reset } = useForm({
    text: defaultTextVal,
  });

  const queryClient = useQueryClient();

  const invalidateCommentsQuery = () => {
    queryClient.invalidateQueries(`getComments-${postId}`);
  };

  const postComment = useMutation(createComment, {
    onSuccess: () => {
      invalidateCommentsQuery();
      reset();
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  const editComment = useMutation(updateComment, {
    onSuccess: () => {
      invalidateCommentsQuery();
      reset();
      if (close) close(); // to close the editComment component when the comment is updated
    },
    onError: (error) => {
      navigateToLogin(error);
    },
  });

  const removeComment = useMutation(deleteComment, {
    onSuccess: () => {
      invalidateCommentsQuery();
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
