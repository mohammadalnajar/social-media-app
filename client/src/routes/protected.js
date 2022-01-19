import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const ProtectedRoute = ({ children, redirectTo }) => {
  const { user } = useAuth();
  return user.status ? children : <Navigate to={redirectTo} />;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
export default ProtectedRoute;
