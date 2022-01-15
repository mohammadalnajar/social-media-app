import React from 'react';
import { AuthProvider } from './context/authContext';
import EntryLayout from './features/entry/EntryLayout';
import './index.css';
import AppProvider from './providers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <div className="h-screen w-screen bg-white dark:bg-gray-800 flex flex-col justify-center items-center">
        <EntryLayout />
      </div>
    </AppProvider>
  );
};

export default App;
