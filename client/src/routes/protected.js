import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import LoadingPage from '../components/LoadingPage';
import { useAuth } from '../context/authContext';
import { fetchUser } from '../utils/api';

const ProtectedRoute = ({ children, redirectTo }) => {
  const { user } = useAuth();
  const { isSuccess, isLoading, isError } = useQuery('fetchUser', fetchUser, {
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isLoading) {
    return user?.data?.email || isSuccess ? (
      children
    ) : (
      <Navigate to={redirectTo} />
    );
  }
  if (isError) {
    <Navigate to={redirectTo} />;
  }
  return null;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
export default ProtectedRoute;
