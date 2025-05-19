import React from 'react';
import ReactDOM from 'react-dom/client';
import AllRoute from './Routes/AllRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext><AllRoute /></AuthContext>
);