import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Route from './Route';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import Admin from 'pages/Admin';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/admin" component={Admin} exact />
    </BrowserRouter>
  );
}
