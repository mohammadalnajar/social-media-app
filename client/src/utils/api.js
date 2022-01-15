const URL = 'http://localhost:4444/api/users/';

const handleApiResponse = async (response) => {
  try {
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
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
