import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="h-screen bg-gray-800 flex flex-col justify-center items-center">
                <p className="text-gray-100">hello world</p>
            </div>
        </QueryClientProvider>
    );
}

export default App;
