import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Komponen Utama
import './index.css';  // File CSS Utama

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
