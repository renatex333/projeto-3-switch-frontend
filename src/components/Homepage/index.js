import React from "react";
import FriendsList from "../FriendsList";
import "./index.css";

export default function Homepage(props) {

  const props_exemplo = {"data": ["Diogo", "Jorás", "Matheus", "Renatex"]};


  return (
    <div className="homepage">
      <FriendsList dados={props_exemplo}></FriendsList>        
    </div>
  );
}