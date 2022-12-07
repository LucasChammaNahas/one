import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { AppProvider } from 'App/Context/contextManager';
import { BrowserRouter } from 'react-router-dom'
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AppProvider> */}
        <App />
      {/* </AppProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
