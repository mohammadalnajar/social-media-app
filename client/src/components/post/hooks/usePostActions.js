import { useQuery } from 'react-query';
import { getDislikes, getLikes } from '../api';

const usePostActions = ({ postId }) => {
  const { data: { data: { likes } = {} } = {} } = useQuery(
    [`getLikes-${postId}`, { postId }],
    getLikes,
    {
      staleTime: 2 * 60 * 1000,
      refetchInterval: 2 * 60 * 1000,
    }
  );

  const { data: { data: { dislikes } = {} } = {} } = useQuery(
    [`getDislikes-${postId}`, { postId }],
    getDislikes,
    {
      staleTime: 2 * 60 * 1000,
      refetchInterval: 2 * 60 * 1000,
    }
  );

  return { likes, dislikes };
};

export default usePostActions;
