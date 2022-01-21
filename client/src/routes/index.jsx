import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import EntryLayout from '../features/entry/EntryLayout';
import MainLayout from '../components/layout/MainLayout';
import ProtectedRoute from './protected';
import { fetchUser } from '../utils/api';
import LoadingPage from '../components/LoadingPage';

const AppRoutes = () => {
  const { isSuccess, error } = useQuery('fetchUser', fetchUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      // if user logged in
      navigate('/feed');
    }
    if (error) {
      // user not logged in
      navigate('/');
    }
  }, [isSuccess, error]);
  return (
    <Routes>
      <Route path="/" element={<EntryLayout />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route
        path="/feed"
        element={
          <ProtectedRoute isSuccess={isSuccess} redirectTo="/loading">
            <MainLayout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
