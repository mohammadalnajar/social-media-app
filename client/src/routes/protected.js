import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import LoadingPage from '../components/LoadingPage';
import { useAuth } from '../context/authContext';
import { fetchUser } from '../utils/api';

const ProtectedRoute = ({ children, redirectTo }) => {
  const { user } = useAuth();
  const { isSuccess, isFetching, isError } = useQuery('fetchUser', fetchUser, {
    retry: 0,
  });

  if (isFetching) {
    return <LoadingPage />;
  }

  if (!isFetching) {
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
