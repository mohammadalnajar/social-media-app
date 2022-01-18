import React from 'react';
import { Router, Outlet, ReactLocation } from 'react-location';
import EntryLayout from '../features/entry/EntryLayout';

const publicRoutes = [
  {
    path: '/',
    element: <EntryLayout />,
  },
];
const protectedRoutes = [
  { path: '/about', element: <div>about page</div> },
  { path: '/home', element: <div>home page</div> },
];
const routes = [...publicRoutes, ...protectedRoutes];
const location = new ReactLocation();

const AppRoutes = () => {
  return (
    <Router routes={routes} location={location}>
      <Outlet />
    </Router>
  );
};

export default AppRoutes;
