import { useMutation, useQuery, useQueryClient } from 'react-query';
import useForm from '../../../hooks/useForm';
import { createComment, updateComment } from '../api';

const useComment = ({ postId, defaultTextVal }) => {
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
    },
  });

  return {
    userData,
    postComment,
    editComment,
    formData,
    handleInputChange,
    reset,
  };
};

export default useComment;
