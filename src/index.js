// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 and above
import App from './App';
import './styles/globals.css'; // Import global styles

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

