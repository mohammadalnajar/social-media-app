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
    <FormWrapper>
      {login ? (
        <>
          <FormHeading />
          <LoginForm>
            <FormButton title="Login" />
          </LoginForm>
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
  );
};

export default EntryLayout;
