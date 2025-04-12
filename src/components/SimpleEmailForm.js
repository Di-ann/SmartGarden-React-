import React, { useState } from 'react';
import '../assets/styles/Contact_us.css'; // Если там общие стили для формы

const SimpleEmailForm = () => {
  const [simpleEmail, setSimpleEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!simpleEmail.trim()) {
      setEmailError('Поле обязательно');
      return;
    }
    if (!emailRegex.test(simpleEmail)) {
      setEmailError('Некорректный email');
      return;
    }

    const storedEmails = JSON.parse(sessionStorage.getItem('simpleSubmissions')) || [];
    if (storedEmails.includes(simpleEmail)) {
      setEmailError('Этот email уже был использован');
      return;
    }

    storedEmails.push(simpleEmail);
    sessionStorage.setItem('simpleSubmissions', JSON.stringify(storedEmails));
    alert('Спасибо! Ваша заявка принята.');
    setSimpleEmail('');
    setEmailError('');
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <input
        type="email"
        className="email-input"
        placeholder="E-mail"
        value={simpleEmail}
        onChange={(e) => setSimpleEmail(e.target.value)}
        maxLength={50}
      />
      <img src="assets/svg/email_icon.svg" alt="email" className="email-icon" />
      <button type="submit" className="submit-button">Оставить заявку</button>
      {emailError && <span className="error">{emailError}</span>}
    </form>
  );
};

export default SimpleEmailForm;
