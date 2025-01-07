import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // To'g'ri import
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>  {/* To'g'ri komponent nomi */}
    <App />
  </BrowserRouter>,
);
