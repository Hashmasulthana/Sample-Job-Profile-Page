import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">JobRinger</h1>
      <nav className="nav">
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/Jobs" className="nav-link">Jobs</Link>
        <Link to="/Quiz" className="nav-link">Quiz </Link>
        <Link to="/Login" className="nav-link login-link">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
