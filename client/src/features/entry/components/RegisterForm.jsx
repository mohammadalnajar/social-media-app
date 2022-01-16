import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ErrorAlert from '../../../components/ErrorAlert';
import { useAuth } from '../../../context/authContext';
import useForm from '../../../hooks/useForm';

const RegisterForm = ({ children }) => {
  const { formData, handleInputChange, reset } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { register } = useAuth();
  console.log(register.isError);

  const handleSubmit = (e) => {
    e.preventDefault();
    register.mutate(formData);
    console.log(formData);
    reset();
  };

  useEffect(() => {
    return () => {
      register.reset();
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-200 mb-2">
            First name
          </span>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            type="text"
            autoComplete="given-name"
            required
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-200 mb-2">
            Last name
          </span>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            type="text"
            autoComplete="family-name"
            required
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>
      <div className="mt-4">
        <span className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
          Email Address
        </span>
        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="mt-4">
        <span className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
          Password
        </span>
        <input
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
          autoComplete="password"
          required
        />
        {register?.isError && (
          <ErrorAlert errorMessage="error" duration={5000} />
        )}
      </div>
      {children}
    </form>
  );
};

RegisterForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RegisterForm;
