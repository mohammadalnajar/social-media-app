import { useMutation, useQuery, useQueryClient } from 'react-query';
import useForm from '../../../hooks/useForm';
import { createComment, deleteComment, updateComment } from '../api';

const useComment = ({ postId, defaultTextVal, close }) => {
  const {
    data: { data: userData },
  } = useQuery('fetchUser');

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
  });

  const editComment = useMutation(updateComment, {
    onSuccess: () => {
      invalidateCommentsQuery();
      reset();
      if (close) close(); // to close the editComment component when the comment is updated
    },
  });

  const removeComment = useMutation(deleteComment, {
    onSuccess: () => {
      invalidateCommentsQuery();
      reset();
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
