import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setError('');
    
    // Basic form validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Set loading state while waiting for API response
    setLoading(true);

    // API Call for login (Example using fetch)
    try {
      const response = await fetch('https://yourapi.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login
        console.log('Login successful:', data);
        // You can store tokens, redirect to another page, etc.
        localStorage.setItem('userToken', data.token);  // Example: Storing token
        window.location.href = '/dashboard';  // Example: Redirect to dashboard page
      } else {
        // Handle error from API (e.g., invalid credentials)
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      // Handle network or unexpected errors
      setError('An error occurred. Please try again later.');
      console.error('Error:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="links">
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          <p>
            New here? <Link to="/register" className="signup-link">Sign Up</Link>  {/* Use Link component here */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
