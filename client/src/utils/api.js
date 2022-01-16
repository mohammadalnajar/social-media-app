const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const handleApiResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    return Promise.reject(data);
  }
  return data;
};

export const loginWithEmailAndPassword = async (data) => {
  return fetch(`${SERVER_URL}login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};

export const registerWithEmailAndPassword = async (data) => {
  return fetch(`${SERVER_URL}signup`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};
