import React from "react";
import { useState } from "react";
import "./index.css";
import axios from "axios";
// import PropTypes from 'prop-types';

export default function CreateAccount(props) {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const modifiedPassword = (event) => {
    setPassword(event.target.value);
  }

  const modifiedConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }

  const accountCreate = (event) => {
    event.preventDefault()
    axios
      .post(
          "https://localhost:8000/api/signup",{"username":username.toString, "password":password.toString}
          )
      .then((res)=>{ console.log(res.data)
        setUserName("")
        setPassword("")
        setConfirmPassword("")
      }
      )
    }

  return (
    <main className="page">
      <div className="create-acc-block">
      <h1 className="create-acc-text">Create a brand new account</h1>
      <form className="form-block">
        <label>
          <input type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <input 
            name="password" 
            type="password" 
            placeholder="Password"
            onChange={modifiedPassword}
            value={password}
          />
        </label>
        <label>
          <input 
            name="confirm-password" 
            type="password" 
            placeholder="Confirm Password"
            onChange={modifiedConfirmPassword}
            value={confirmPassword}  
          />
        </label>
        {
          password === "" ? (
            console.log()
          ) : (
            password !== confirmPassword ? (
            <h5 className="password-message">Passwords don't match!</h5>
            ) : (
            <h5 className="password-message">Passwords match!</h5>
            )
          )
        }
        <button className="btn" type="submit" disabled={password !== confirmPassword} onSubmit={accountCreate}>Create Account</button>
      </form>
      </div>
    </main>
  )
}