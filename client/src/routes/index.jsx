import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import NotFound from '../components/NotFound';
import EntryLayout from '../features/entry/EntryLayout';
import ProtectedRoute from './protected';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EntryLayout />} />
      <Route
        path="/feed"
        element={
          <ProtectedRoute redirectTo="/">
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
