/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../utils/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ user: null });
  const navigate = useNavigate();

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

  const fetchUser = async () => {
    const result = await fetch(
      `${process.env.REACT_APP_SERVER_URL}api/users/user`,
      {
        credentials: 'include',
      }
    );
    return result.json();
  };

  const value = useMemo(() => {
    return { user, login, register, logout };
  }, [user, login, register, logout]);

  const result = useQuery('fetchUser', fetchUser, true);

  useEffect(() => {
    if (result.status === 'success') {
      setUser(result?.data);
      navigate('/feed');
    }
  }, [result.status]);

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
