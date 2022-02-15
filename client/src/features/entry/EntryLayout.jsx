import React, { useState } from 'react';
import FormButton from './components/FormButton';
import FormHeading from './components/FormHeading';
import FormToggle from './components/FormToggle';
import FormWrapper from './components/FormWrapper';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const EntryLayout = () => {
  const [login, setLogin] = useState(true);
  const toggleForm = () => {
    setLogin(!login);
  };
  return (
    <div className="h-screen w-screen  bg-white dark:bg-gray-800 flex justify-center items-center">
      <FormWrapper>
        {login ? (
          <>
            <FormHeading />
            <LoginForm />
          </>
        ) : (
          <RegisterForm>
            <FormButton title="Sign up" />
          </RegisterForm>
        )}

        <FormToggle
          title={login ? 'or sign up' : 'or login'}
          toggleForm={toggleForm}
        />
      </FormWrapper>
    </div>
  );
};

export default EntryLayout;
