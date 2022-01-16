/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import PropTypes from 'prop-types';
import React, { createContext, useContext, useMemo, useState } from 'react';
import { useMutation } from 'react-query';
import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../utils/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ user: null });

  const login = useMutation(loginWithEmailAndPassword, {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  const register = useMutation(registerWithEmailAndPassword, {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(() => {
    return { user, login, register, logout };
  }, [user, login, register, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
