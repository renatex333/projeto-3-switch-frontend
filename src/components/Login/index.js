import React, {useState} from "react";
import PropTypes from 'prop-types';
import "./index.css";

async function loginUser(credentials) {
  return fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


  return (
    <main className="page">
      <div className="login-block">
        <h1 className="login-text">Switch Account</h1>
        <form className="form-block" onSubmit={handleSubmit}>
          <label>
            <input type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <button className="btn" type="submit">Login</button>
          <h5 className="login-message">Don't have an account yet? <a className="create-account-href" href="/createaccount">Create an account now for free!</a></h5>
        </form>
      </div>
    </main>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};