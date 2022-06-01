import React from "react";
import "./index.css";

export default function Login(props) {


  return (
    <main className="page">
      <div className="login-block">
      <h1 className="login-text">Switch Account</h1>
      <form className="form-block">
        <label>
          <input type="text" placeholder="Username"/>
        </label>
        <label>
          <input type="password" placeholder="Password"/>
        </label>
          <button className="btn" type="submit">Login</button>
          <h5 className="login-message">Don't have an account yet? <a className="create-account-href" href="/createaccount">Create an account now for free!</a></h5>
      </form>
      </div>
    </main>
  );
}