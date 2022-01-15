import React from 'react';
import FormButton from './components/FormButton';
import FormHeading from './components/FormHeading';
import FormToggle from './components/FormToggle';
import FormWrapper from './components/FormWrapper';
import LoginForm from './components/LoginForm';

const EntryLayout = () => {
  return (
    <FormWrapper>
      <FormHeading />
      <LoginForm>
        <FormButton title="Login" />
      </LoginForm>
      <FormToggle title="or sign up" />
    </FormWrapper>
  );
};

export default EntryLayout;
