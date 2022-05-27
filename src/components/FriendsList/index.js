import React from "react";
import { useEffect, useState } from "react";
import "./index.css";

export default function FriendsList(props) {
  const [friendName, setFriendName] = useState("");

  const modifiedName = (event) => {
    setFriendName(event.target.value);
  }

  function addFriend(event) {
    event.preventDefault();
    let message = {"data": friendName};
    // Aqui faz request no servidor para adicionar amigo pelo nome
    console.log(message);
    // Depois de tudo (mas dentro do "then" da request) faz esse comando abaixo para limpar o formulário (Exemplo em Heoku-React-TW/components/Formulario/index.js)
    setFriendName("");
  }

  return (
    <div className="friends">
        <h3 className="list-title">Lista de Amigos</h3>
        <form className="friend-list-form" onSubmit={addFriend}>
          <input 
            className="friend-name" 
            type={"text"} 
            name="name-input" 
            placeholder="Nome do amigo" 
            onChange={modifiedName} 
            value={friendName}
          /> 

        </form>
        <div className="list-content">
          <ul>
              {props.dados.data.map((s) => (
              <li>{s}</li>
              ))}
          </ul>
        </div>
    </div>
  );
}