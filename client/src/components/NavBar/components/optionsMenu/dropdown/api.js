const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const USER_URL = 'api/users';

const handleApiResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    return Promise.reject(data);
  }
  return data;
};

const logoutUser = async () => {
  return fetch(`${SERVER_URL}${USER_URL}/logout`, {
    credentials: 'include',
  }).then(handleApiResponse);
};

export default logoutUser;
