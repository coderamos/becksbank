import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/dashboard" component={Dashboard} exact />
    </BrowserRouter>
  );
}
