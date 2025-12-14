// pages/AuthPage.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm.jsx';
import RegisterForm from '../components/Auth/RegisterForm.jsx';

const AuthPage = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />

      {/* ako neko ode na /auth → preusmeri na login */}
      <Route path="" element={<Navigate to="login" replace />} />
    </Routes>
  );
};

export default AuthPage;
