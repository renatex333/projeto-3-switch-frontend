import React from "react";
import "./index.css";
import PropTypes from 'prop-types';

export default function Login(props) {


  return (
    <main className="page">
      <div className="login-block">
      <h1 className="login-text"></h1>
      <form className="form-block">
        <label>
          <p className="form-text">Please Login</p>
          <input type="text" placeholder="Username"/>
        </label>
        <label>
          <p className="form-text" ></p>
          <input type="password" placeholder="Password"/>
        </label>
          <button className="btn" type="submit">Login</button>
          <button className="btn" type="submit">Create Account</button>
      </form>
      </div>
    </main>
  );
}