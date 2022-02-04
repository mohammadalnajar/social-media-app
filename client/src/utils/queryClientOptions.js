import { QueryClient } from 'react-query';
import { fetchUser } from './api';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

queryClient.setQueryDefaults('fetchUser', {
  queryFn: fetchUser,
  retry: 0,
  staleTime: 5 * 60 * 1000,
});

export default queryClient;
