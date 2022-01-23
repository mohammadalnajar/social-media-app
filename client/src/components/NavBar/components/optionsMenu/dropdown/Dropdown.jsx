import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import logoutUser from './api';
import DropDownItem from './DropDownItem';

const Dropdown = () => {
  const navigate = useNavigate();
  const logout = useMutation(logoutUser, {
    onSuccess: (data) => {
      if (data?.status === 'ok') {
        navigate('/');
      }
    },
  });
  const logoutUserOnClick = () => {
    logout.mutate();
  };
  return (
    <div className="dropdown dropdown-end">
      <div
        role="button"
        tabIndex="0"
        className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative"
      >
        <i className="fas fa-chevron-down" />
      </div>
      <ul className="p-2 shadow menu dropdown-content dark:border-dark-third border dark:bg-dark-second bg-base-100 dark:text-dark-txt rounded-box w-52">
        <li>
          <DropDownItem title="Item 1" />
        </li>
        <li>
          <DropDownItem title="Item 2" />
        </li>
        <li>
          <DropDownItem title="Log Out" onClick={logoutUserOnClick} />
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
