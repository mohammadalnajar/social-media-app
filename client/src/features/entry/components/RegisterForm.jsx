import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';
import useForm from '../../../hooks/useForm';

const RegisterForm = ({ children }) => {
  const navigate = useNavigate();
  const { formData, handleInputChange, reset } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const {
    register,
    register: { isSuccess },
  } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register.mutate(formData);
    console.log(formData);
    reset();
  };

  const error = register?.error?.errorMessages?.filter((e) => {
    return e.field === 'password';
  });

  const passwordError =
    'Password should have at least 8 characters, one uppercase, one lowercase, one number and one special character!';

  useEffect(() => {
    if (isSuccess) {
      navigate('/feed');
    }
    return () => {
      register.reset();
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <div className="flex flex-col flex-grow">
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
        <div className="flex flex-col flex-grow">
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
        {/* {error && <ErrorAlert errorMessage={passwordError} duration={5000} />} */}
        {error && (
          <span className="text-[12px] text-red-500 block mt-2">
            {passwordError}
          </span>
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
