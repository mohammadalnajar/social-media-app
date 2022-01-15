import React from 'react';
import FormButton from './components/FormButton';
import FormToggle from './components/FormToggle';
import FormWrapper from './components/FormWrapper';
import LoginForm from './components/LoginForm';

const EntryLayout = () => {
  return (
    <FormWrapper>
      <LoginForm>
        <FormButton title="Login" />
      </LoginForm>
      <FormToggle title="or sign up" />
    </FormWrapper>
  );
};

export default EntryLayout;
