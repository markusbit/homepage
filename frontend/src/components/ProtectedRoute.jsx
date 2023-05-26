import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {

  const navigate = useNavigate(); 

  if (!isAuthenticated()) {
    return navigate('/login');
  }

  return element;
};

export default ProtectedRoute;
