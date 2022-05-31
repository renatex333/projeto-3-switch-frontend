import React from "react";
import { useEffect, useState } from "react";
import "./index.css";
// import PropTypes from 'prop-types';

export default function CreateAccount(props) {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const modifiedPassword = (event) => {
    setPassword(event.target.value);
  }

  const modifiedConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }


  return (
    <main className="page">
      <div className="create-acc-block">
      <h1 className="create-acc-text">Create a brand new account</h1>
      <form className="form-block">
        <label>
          <input type="text" placeholder="Username"/>
          <p></p>
        </label>
        <label>
          <input 
            name="password" 
            type="password" 
            placeholder="Password"
            onChange={modifiedPassword}
            value={password}
          />
          <p></p>
        </label>
        <label>
          <input 
            name="confirm-password" 
            type="password" 
            placeholder="Confirm Password"
            onChange={modifiedConfirmPassword}
            value={confirmPassword}  
          />
          <p></p>
        </label>
        {
          password == "" ? (
            console.log()
          ) : (
            password != confirmPassword ? (
            <h5>Passwords don't match!</h5>
            ) : (
            <h5>Passwords match!</h5>
            )
          )
        }
        <button className="btn" type="submit" disabled={password != confirmPassword}>Create Account</button>
      </form>
      </div>
    </main>
  );
}