import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg'; // Import your logo image file

const Navbar = ({ balance }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />{/* Use inline style for logo height */}
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deposit">Deposit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/withdraw">Withdraw</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-text">
          Balance: ${balance}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




