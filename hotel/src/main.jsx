import React from 'react';
import { createRoot } from 'react-dom/client'; // Ya está importado correctamente desde 'react-dom/client'
import './index.css';
import App from './App';

// Ahora usamos createRoot directamente sin ReactDOM
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
