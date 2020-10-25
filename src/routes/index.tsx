import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import Admin from 'pages/Admin';
import Extract from 'pages/Extract';
import Transfers from 'pages/Transfers';
import Payments from 'pages/Payments';
import UnauthorizedPage from 'pages/Unauthorized';

const AppRoutes: React.FC = () => (
  <Routes>
    <ProtectedRoutes
      path="/login"
      element={<Login />}
      roles={['USER', 'ADMIN']}
    />
    <ProtectedRoutes path="/signup" element={<SignUp />} roles={['USER']} />
    <ProtectedRoutes path="/" element={<Dashboard />} roles={['USER']} />
    <ProtectedRoutes path="/admin" element={<Admin />} roles={['ADMIN']} />
    <ProtectedRoutes path="/extract" element={<Extract />} roles={['USER']} />
    <ProtectedRoutes
      path="/transfers"
      element={<Transfers />}
      roles={['USER']}
    />
    <ProtectedRoutes path="/payments" element={<Payments />} roles={['USER']} />
    <Route path="/unauthorized" element={<UnauthorizedPage />} />
  </Routes>
);

const ProtectedRoutes = props => {
  const { getSession } = useAuth();

  const isAdmin = getSession()?.auth === 'ADMIN';

  const isUserLogged = () => {
    const session = getSession();
    return !!session;
  };

  const isAuthorized = props.roles?.includes(
    getSession() ? getSession().auth : ''
  );

  const isLoginOrSignupRoute = ['/login', '/signup'].includes(props.path);

  if (isUserLogged() && isAdmin && props.path !== '/admin') {
    return <Navigate to={'/admin'} />;
  }

  if (isUserLogged() && isAuthorized) {
    if (isLoginOrSignupRoute) {
      return <Navigate to={'/'} />;
    } else {
      return <Route {...props} />;
    }
  }

  if (!isUserLogged() && isLoginOrSignupRoute) {
    return <Route {...props} />;
  }

  return <Navigate to={isUserLogged() ? '/unauthorized' : '/login'} />;
};

export default AppRoutes;
