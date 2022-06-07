import React from "react";

import { slide as Menu } from 'react-burger-menu';

import "./index.css";

// https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar
// https://github.com/negomi/react-burger-menu
// https://negomi.github.io/react-burger-menu/
// https://www.npmjs.com/package/react-burger-menu

export default function Sidebar(props) {
  return (
    <Menu right>
      {props.token &&
      <h2 className="menu-item">Welcome</h2>
      }
      <a className="menu-item" href="/">
        Home
      </a>
      {!props.token &&
      <a className="menu-item" href="/login">
        Login
      </a>
      }
      <a className="menu-item" href="/credits">
        Credits
      </a>
      {props.token &&
        <form onSubmit={props.setToken("")}>
          <button className="logout">logout</button>
        </form>
      }
    </Menu>
  );
}