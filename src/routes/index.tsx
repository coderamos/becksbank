import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Route from './Route';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import Admin from 'pages/Admin';

const Routes: React.FC = () => (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate/>
      <Route path="/admin" component={Admin} />
    </BrowserRouter>
);

export default Routes;
