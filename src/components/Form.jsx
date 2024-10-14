import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = 'Имя не должно быть пустым';
    }
    if (!email) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Неверный формат email';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Форма отправлена', { name, email });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
