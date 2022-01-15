import PropTypes from 'prop-types';
import React from 'react';

const LoginForm = ({ children }) => {
  return (
    <form>
      <div className="mt-4">
        <span className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
          Email Address
        </span>
        <input
          name="email"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
          autoComplete="email"
        />
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <span className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Password
          </span>
          <button
            type="button"
            className="text-xs text-gray-500 dark:text-gray-300 hover:underline mb-2"
          >
            Forget Password?
          </button>
        </div>
        <input
          name="password"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
          autoComplete="password"
        />
      </div>
      {children}
    </form>
  );
};

LoginForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginForm;
