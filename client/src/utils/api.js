const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const USER_URL = 'api/users/';

const handleApiResponse = async (response) => {
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
  const result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}api/users/user`,
    {
      credentials: 'include',
    }
  );
  return result.json();
};
