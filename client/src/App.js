import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import AppProvider from './providers/AppProvider';
import AppRoutes from './routes';

const App = () => {
  return (
    <AppProvider>
      <div className="h-screen w-screen bg-white dark:bg-dark-second">
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </AppProvider>
  );
};

export default App;
