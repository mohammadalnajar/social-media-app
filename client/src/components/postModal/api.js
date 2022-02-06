import { handleApiResponse } from '../../utils/api';
import {
  IMG_CLOUD_URL,
  IMG_URL,
  POST_URL,
  SERVER_URL,
} from '../../utils/constants';

export const uploadImage = async (data) => {
  const formData = new FormData();
  formData.append('file', data[0]);
  formData.append('name', data[0].name);

  return fetch(`${SERVER_URL}${IMG_URL}`, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  }).then(handleApiResponse);
};

export const uploadImageCloud = async (data) => {
  return fetch(`${SERVER_URL}${IMG_CLOUD_URL}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  }).then(handleApiResponse);
};

export const createPost = async (data) => {
  return fetch(`${SERVER_URL}${POST_URL}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};

export const editPost = async (data) => {
  return fetch(`${SERVER_URL}${POST_URL}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};

export const createPostWithImages = async (data) => {
  return fetch(`${SERVER_URL}${POST_URL}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};
