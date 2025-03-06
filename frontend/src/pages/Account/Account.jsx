import React, { useState, useContext } from 'react';
import './Account.css';
import { StoreContext } from '../../context/StoreContext';

const Account = () => {

  const [login, setLogin] = useState(false);
  const [name, setName] = useState("Sagar");
  const [loggedIn,setloggedIn] = useState(true)

  return (
    <div className="account-div">
      {loggedIn ? (
        <div className="profile-container">
          <center className="profile-header">My Account</center>
          <center className="profile-welcome">Welcome, {name}</center>
          <ul className="profile-options">
            <li>Orders</li>
            <li>Logout</li>
          </ul>
        </div>
      ) : (
        <div className="login-container">
          <form>
            {!login && (
              <input
                type="text"
                placeholder="Enter Your Fullname"
                className="input-field"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input-field"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input-field"
            />

            <button type="submit" className="submit-button">
              {login ? "Login" : "Register"}
            </button>
          </form>
          <p className="toggle-text" onClick={() => setLogin(!login)}>
            {login
              ? "Don't have an account? Click here to register"
              : "Already have an account? Click here to login"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Account;
