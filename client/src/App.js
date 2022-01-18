import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import EntryLayout from './features/entry/EntryLayout';
import './index.css';
import AppProvider from './providers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <div className="h-screen w-screen bg-white dark:bg-dark-second">
        {/* <EntryLayout /> */}
        <MainLayout />
        <Router>
          <Routes>
            <Route exact path="/" element={<EntryLayout />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
};

export default App;
