import React from 'react';
import Form from './features/entry/Form';
import './index.css';
import AppProvider from './providers/AppProvider';

const App = () => {
    return (
        <AppProvider>
            <div className="h-screen w-screen bg-white dark:bg-gray-800 flex flex-col justify-center items-center">
                <Form />
            </div>
        </AppProvider>
    );
};

export default App;
