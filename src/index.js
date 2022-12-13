import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Renders App component into root element of index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);