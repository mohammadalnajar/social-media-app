import React from 'react';
import MainLayout from './components/layout/MainLayout';
import './index.css';
import AppProvider from './providers/AppProvider';
import AppRoutes from './routes';

const App = () => {
  return (
    <AppProvider>
      <div className="h-screen w-screen bg-white dark:bg-dark-second">
        {/* <EntryLayout /> */}
        <MainLayout />
      </div>
    </AppProvider>
  );
};

export default App;
