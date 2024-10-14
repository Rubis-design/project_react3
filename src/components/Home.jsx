import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Главная страница</h1>
      <p>Добро пожаловать на наш сайт!</p>
      <button onClick={goToLogin}>Перейти на страницу входа</button>
    </div>
  );
};

export default Home;
