import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
