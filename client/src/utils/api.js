const SERVER_URL = 'http://localhost:4444/api/users/';

const handleApiResponse = async (response) => {
  try {
    const data = await response.json();
    console.log(data, 'response');
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const loginWithEmailAndPassword = async (data) => {
  return fetch(`${SERVER_URL}signin`, {
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
