import React from 'react';
import './index.css';
import AppProvider from './providers/AppProvider';

const App = () => {
    return (
        <AppProvider>
            <div className="h-screen bg-gray-800 flex flex-col justify-center items-center">
                <p className="text-gray-100">hello world</p>
            </div>
        </AppProvider>
    );
};

export default App;
