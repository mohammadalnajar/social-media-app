import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';
import useForm from '../../../hooks/useForm';
import usePassEye from '../../../hooks/usePassEye';
import useValidations from '../hooks/useValidations';
import FormButton from './FormButton';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { passShowEye, passHideEye, clickEye } = usePassEye();
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

  const {
    firstNameError,
    lastNameError,
    emailError,
    passwordErrors,
    reset: resetErrors,
  } = useValidations({ error: register?.error });

  const handleSubmit = (e) => {
    e.preventDefault();
    resetErrors.allErrors(); // reset error messages onSubmit
    register.mutate(formData);
    if (isSuccess) {
      reset();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/feed');
    }
    return () => {
      register.reset();
    };
  }, [isSuccess]);

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
            onChange={(e) => {
              handleInputChange(e);
              resetErrors.firstNameError();
            }}
            type="text"
            autoComplete="given-name"
            required
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {firstNameError && (
            <span className="text-[12px] text-red-500 block mt-2 ml-1">
              {firstNameError[0]}
            </span>
          )}
        </div>
        <div className="flex flex-col flex-grow">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-200 mb-2">
            Last name
          </span>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={(e) => {
              handleInputChange(e);
              resetErrors.lastNameError();
            }}
            type="text"
            autoComplete="family-name"
            required
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {lastNameError && (
            <span className="text-[12px] text-red-500 block mt-2 ml-1">
              {lastNameError[0]}
            </span>
          )}
        </div>
      </div>
      <div className="mt-4">
        <span className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
          Email Address
        </span>
        <input
          name="email"
          value={formData.email}
          onChange={(e) => {
            handleInputChange(e);
            resetErrors.emailError();
          }}
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
          autoComplete="email"
          required
        />
        {emailError && (
          <span className="text-[12px] text-red-500 block mt-2 ml-1">
            {emailError[0]}
          </span>
        )}
      </div>
      <div className="mt-4">
        <span className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
          Password
        </span>
        <div className="relative">
          <input
            name="password"
            value={formData.password}
            onChange={(e) => {
              handleInputChange(e);
              resetErrors.passwordErrors();
            }}
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type={passShowEye ? 'text' : 'password'}
            autoComplete="password"
            required
          />
          {passHideEye && (
            <button type="button" onClick={clickEye}>
              <i
                className="fa-solid fa-eye-slash absolute top-3 right-3 text-gray-700 cursor-pointer dark:hover:text-gray-500
  dark:text-gray-300"
              />
            </button>
          )}
          {passShowEye && (
            <button type="button" onClick={clickEye}>
              <i
                className="fa-solid fa-eye absolute top-3 right-3 text-gray-700 cursor-pointer dark:hover:text-gray-500
dark:text-gray-300"
              />
            </button>
          )}
          {passwordErrors && (
            <div className="flex flex-col">
              {passwordErrors.map((err) => {
                return (
                  <span
                    key={err}
                    className="text-[12px] text-red-500 block mt-2 ml-1"
                  >
                    {err}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <FormButton title="Sign up" isLoading={register.isLoading} />
    </form>
  );
};

export default RegisterForm;
