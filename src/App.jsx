import React from 'react';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contacts';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/contact">Контакты</Link>
          </li>
          <li>
            <Link to="/login">Войти</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
