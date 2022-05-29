import React from "react";
import "./index.css";
import PropTypes from 'prop-types';

export default function Login(props) {


  return (
    <main className="page">
      <div className="login-block">
      <h1>Please Login</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </main>
  );
}