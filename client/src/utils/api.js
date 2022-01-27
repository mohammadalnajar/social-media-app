import {
  IMG_URL,
  POST_URL,
  SERVER_URL,
  USER_URL,
  IMG_CLOUD_URL,
} from './constants';

export const handleApiResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    return Promise.reject(data);
  }
  return data;
};

export const loginWithEmailAndPassword = async (data) => {
  return fetch(`${SERVER_URL}${USER_URL}login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};

export const registerWithEmailAndPassword = async (data) => {
  return fetch(`${SERVER_URL}${USER_URL}signup`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};

export const fetchUser = async () => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}api/users/user`, {
    credentials: 'include',
  }).then(handleApiResponse);
};

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
