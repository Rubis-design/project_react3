import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Страница входа</h1>
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default Login;
