import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../../../components/ErrorAlert';
import { useAuth } from '../../../context/authContext';
import useForm from '../../../hooks/useForm';

const LoginForm = ({ children }) => {
  const navigate = useNavigate();
  const { formData, handleInputChange, reset } = useForm({
    email: '',
    password: '',
  });

  const {
    login,
    login: { isSuccess },
  } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login.mutate(formData);
    reset();
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/feed');
    }
    return () => {
      login.reset();
    };
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4">
        <span className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
          Email Address
        </span>
        <input
          name="email"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleInputChange}
          required
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
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        {login?.error?.error && (
          <ErrorAlert errorMessage={login.error.error} duration={5000} />
        )}
      </div>
      {children}
    </form>
  );
};

LoginForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginForm;
