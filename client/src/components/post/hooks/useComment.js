import { useMutation, useQuery, useQueryClient } from 'react-query';
import useForm from '../../../hooks/useForm';
import { createComment } from '../api';

const useComment = ({ postId }) => {
  const {
    data: { data: userData },
  } = useQuery('fetchUser');

  const { formData, handleInputChange, reset } = useForm({ text: '' });

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

  return { userData, postComment, formData, handleInputChange, reset };
};

export default useComment;
