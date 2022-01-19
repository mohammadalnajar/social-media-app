import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import EntryLayout from './features/entry/EntryLayout';
import './index.css';
import AppProvider from './providers/AppProvider';
import AppRoutes from './routes';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <AppRoutes /> {/* this routes can be found in the routes folder */}
      </Router>
    </AppProvider>
  );
};

export default App;
