// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

function ProtectedRoute({ children, userType }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const token = localStorage.getItem(`${userType}Token`);
  const storedAuth = JSON.parse(localStorage.getItem('auth'));
  const role = storedAuth?.user?.role || user?.role;
  const isAuthenticated = token && role === userType;

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={`/${userType}/login`} state={{ from: location }} replace />
  );
}

export default ProtectedRoute;
