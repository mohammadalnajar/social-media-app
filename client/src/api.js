const URL = 'http://localhost:4444/api/users/';

export const handleApiResponse = async (response) => {
  const data = await response.json();

  if (response.ok) {
    return data;
  }
  return Promise.reject(data);
};

export const loginWithEmailAndPassword = async (data) => {
  return fetch(`${URL}signin`, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};

export const registerWithEmailAndPassword = async (data) => {
  return fetch(`${URL}signup`, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};
