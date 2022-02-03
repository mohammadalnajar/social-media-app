import React from 'react';

const PostAuthorAction = () => {
  return (
    <div className="dropdown">
      <button
        type="button"
        className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer"
      >
        <i className="bx bx-dots-horizontal-rounded" />
      </button>
      <ul className="p-2 shadow menu dropdown-content bg-base-100 dark:bg-dark-third rounded-box w-52">
        <li className="dark:hover:bg-dark-hover dark:text-gray-100">
          <button type="button">Item 1</button>
        </li>
        <li className="dark:hover:bg-dark-hover dark:text-gray-100">
          <button type="button">Item 2</button>
        </li>
        <li className="dark:hover:bg-dark-hover dark:text-gray-100">
          <button type="button">Item 3</button>
        </li>
      </ul>
    </div>
  );
};

export default PostAuthorAction;
