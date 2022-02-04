import { handleApiResponse } from '../../utils/api';
import { FEED_URL, POST_URL } from '../../utils/constants';

export const getUserPosts = async () => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}${POST_URL}`, {
    credentials: 'include',
  }).then(handleApiResponse);
};

export const getFeedPosts = async () => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}${POST_URL}${FEED_URL}`, {
    credentials: 'include',
  }).then(handleApiResponse);
};
