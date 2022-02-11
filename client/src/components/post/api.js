import { handleApiResponse } from '../../utils/api';
import {
  FEED_URL,
  POST_URL,
  SERVER_URL,
  LIKE_URL,
  DISLIKE_URL,
} from '../../utils/constants';

export const getUserPosts = async () => {
  return fetch(`${SERVER_URL}${POST_URL}`, {
    credentials: 'include',
  }).then(handleApiResponse);
};

export const getFeedPosts = async () => {
  return fetch(`${SERVER_URL}${POST_URL}${FEED_URL}`, {
    credentials: 'include',
  }).then(handleApiResponse);
};

export const deletePost = async (data) => {
  return fetch(`${SERVER_URL}${POST_URL}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};

export const likePost = async (data) => {
  const { postId } = data;
  return fetch(`${SERVER_URL}${POST_URL}${LIKE_URL}${postId}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};

export const dislikePost = async (data) => {
  const { postId } = data;
  return fetch(`${SERVER_URL}${POST_URL}${DISLIKE_URL}${postId}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};
