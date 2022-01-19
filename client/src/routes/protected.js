import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const protectedRoutes = [{ path: '/feed', element: <MainLayout /> }];

export default protectedRoutes;
