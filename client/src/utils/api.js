import { SERVER_URL, USER_URL } from './constants';

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

export const logoutUser = async () => {
  return fetch(`${SERVER_URL}${USER_URL}/logout`, {
    credentials: 'include',
  }).then(handleApiResponse);
};

export const fetchUser = async () => {
  return fetch(`${SERVER_URL}${USER_URL}user`, {
    credentials: 'include',
  }).then(handleApiResponse);
};
