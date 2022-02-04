import { QueryClient } from 'react-query';
import { getFeedPosts } from '../components/post/api';
import { fetchUser } from './api';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

queryClient.setQueryDefaults('fetchUser', {
  queryFn: fetchUser,
  staleTime: 5 * 60 * 1000,
});

queryClient.setQueryDefaults('getFeedPosts', {
  queryFn: getFeedPosts,
  staleTime: 2 * 60 * 1000,
  refetchInterval: 2 * 60 * 1000,
});

export default queryClient;
