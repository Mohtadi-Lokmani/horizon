import './Login.css';
import back from '../Images/Capture\ d\'écran\ 2025-04-06\ 221523.png';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const trimmedUser = username.trim().toLowerCase();
    const trimmedPass = password.trim().toLowerCase();
  
    if (trimmedUser === 'admin' && trimmedPass === 'admin1230') {
      localStorage.setItem('isAuthenticated', 'true'); // Save login state
      navigate('/dashboard');
    } else {
      alert('Nom admin ou mot de passe incorrect');
    }
  };
  
  return (
    <>
      <img className="loginimg" src={back} />
      <div className="login-container">
        <div className="login-card">
          <h1>HORIZON ACADEMY</h1>
          <div className="input-group">
            <span className="icon">
              <i className="fa-solid fa-user"></i>
            </span>
            <input
              type="text"
              placeholder="NOM ADMIN"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="icon">
              <i className="fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              placeholder="MOT DE PASSE"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>LOGIN</button>
        </div>
      </div>
    </>
  );
};

export default Login;
