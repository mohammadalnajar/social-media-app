import PropTypes from 'prop-types';
import React from 'react';

const RegisterForm = ({ children }) => {
  return (
    <form>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-200 mb-2">
            First name
          </span>
          <input
            type="text"
            autoComplete="given-name"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-200 mb-2">
            Last name
          </span>
          <input
            type="text"
            autoComplete="family-name"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>
      <div className="mt-4">
        <span className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
          Email Address
        </span>
        <input
          id="LoggingEmailAddress"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
          autoComplete="email"
        />
      </div>
      <div className="mt-4">
        <span className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
          Password
        </span>
        <input
          id="loggingPassword"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
          autoComplete="password"
        />
      </div>
      {children}
    </form>
  );
};

RegisterForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RegisterForm;
