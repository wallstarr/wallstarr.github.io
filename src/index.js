import React from 'react';
import './index.css';
import './output.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Get the root container
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

// Prepare the component to render
const toRender = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

root.render(toRender);
reportWebVitals();
