import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const container = document.getElementById('root');

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
}
