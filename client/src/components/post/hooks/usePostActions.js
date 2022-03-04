import { useQuery } from 'react-query';
import { getPostStats } from '../api';

const usePostActions = ({ postId }) => {
  const { data: { data: { comments, likes, dislikes } = {} } = {} } = useQuery(
    [`getPostStats-${postId}`, { postId }],
    getPostStats,
    {
      staleTime: 2 * 60 * 1000,
      refetchInterval: 2 * 60 * 1000,
    }
  );

  return { likes, dislikes, comments };
};

export default usePostActions;
