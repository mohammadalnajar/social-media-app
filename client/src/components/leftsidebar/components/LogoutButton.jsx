import React from 'react';
import useLogout from '../../../hooks/useLogout';

const LogoutButton = () => {
  const { logoutUserOnClick } = useLogout();
  return (
    <button
      onClick={logoutUserOnClick}
      className="flex items-center rounded-xl pr-3 hover:bg-gray-200 dark:hover:bg-dark-hover cursor-pointer"
      type="button"
    >
      <div className="mr-3">
        <i className="text-white p-3 rounded-xl bg-green-primary fa-solid fa-arrow-right-from-bracket" />
      </div>
      <div className="dark:text-dark-txt">Log out</div>
    </button>
  );
};

export default LogoutButton;
