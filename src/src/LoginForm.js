import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [registerNumber, setRegisterNumber] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    if (registerNumber && username) {
      navigate('/departments'); 
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="login-container">
      
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="register-number">Register Number</label>
          <input 
            type="text" 
            id="register-number" 
            name="registerNumber" 
            value={registerNumber} 
            onChange={(e) => setRegisterNumber(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
