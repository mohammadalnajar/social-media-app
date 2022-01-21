import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const ProtectedRoute = ({ children, redirectTo, isSuccess }) => {
  const { user } = useAuth();

  return user?.data?.email || isSuccess ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};
export default ProtectedRoute;
