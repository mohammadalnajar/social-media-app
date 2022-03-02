import { useEffect, useState } from 'react';

const useValidations = ({ error }) => {
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordErrors, setPasswordErrors] = useState(null);

  const reset = {
    allErrors() {
      setFirstNameError(null);
      setLastNameError(null);
      setEmailError(null);
      setPasswordErrors(null);
    },
    firstNameError() {
      setFirstNameError(null);
    },
    lastNameError() {
      setLastNameError(null);
    },
    emailError() {
      setEmailError(null);
    },
    passwordErrors() {
      setPasswordErrors(null);
    },
  };
  useEffect(() => {
    if (error) {
      error.errorMessages.forEach((e) => {
        switch (e.field) {
          case 'password':
            setPasswordErrors(e.messagesArray);
            break;
          case 'firstName':
            setFirstNameError(e.messagesArray);
            break;
          case 'lastName':
            setLastNameError(e.messagesArray);
            break;
          case 'email':
            setEmailError(e.messagesArray);
            break;
          default:
            console.log('good');
            break;
        }
      });
    }
  }, [error]);

  return { firstNameError, lastNameError, emailError, passwordErrors, reset };
};

export default useValidations;
