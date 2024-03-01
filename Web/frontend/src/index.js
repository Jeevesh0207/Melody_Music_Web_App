import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Hook/Auth';
import { AuthSongProvider } from './Hook/Song'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthSongProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AuthSongProvider>
    </BrowserRouter>
  </React.StrictMode>
);


