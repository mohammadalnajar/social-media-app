/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import * as React from 'react';
import { useMutation } from 'react-query';
import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../utils/api';

const authContext = React.createContext();

const authProvider = ({ children }) => {
  const [user, setUser] = React.useState({ user: null });

  const login = useMutation({
    mutationFn: loginWithEmailAndPassword,
    onSuccess: (data) => {
      setUser(data);
    },
  });

  const register = useMutation({
    mutationFn: registerWithEmailAndPassword,
    onSuccess: (data) => {
      setUser(data);
    },
  });

  const logout = () => {
    setUser(null);
  };

  const value = React.useMemo(() => {
    user, login, register, logout;
  }, [user]);

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

const useAuth = () => {
  const context = React.useContext(authContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a authProvider');
  }
  return context;
};

export { authProvider, useAuth };
