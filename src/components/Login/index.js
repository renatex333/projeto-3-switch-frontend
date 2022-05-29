import React from "react";
import "./index.css";
import PropTypes from 'prop-types';

export default function Login(props) {


  return (
    <main className="page">
      <div className="login-block">
      <h1 className="login-text">Please Login</h1>
      <form className="form-block">
        <label>
          <p className="form-text">Username</p>
          <input type="text" />
        </label>
        <label>
          <p className="form-text">Password</p>
          <input type="password" />
        </label>
        <div>
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
      </div>
    </main>
  );
}