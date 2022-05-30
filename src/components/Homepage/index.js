import React from "react";
import FriendsList from "../FriendsList";
import News from "../News";
import "./index.css";

export default function Homepage(props) {

  const props_exemplo = {"data": ["Diogo", "Jorás", "Matheus", "Renatex", "Eduardo", "Ricardo", "Paulo", "Pedro", "Mauro", "Lorena", "Ana", "Joaquina"]};
  const news_exemplo = [{
    "title":"Xbox is working on a small device for playing games over the internet",
    "url":"https://www.independent.co.uk/tech/xbox-microsoft-keystone-streaming-cloud-gaming-console-b2089088.html",
    "source":"independentUk"
    },
    {
      "title":"Xbox Game Pass’s May 2022 list includes Skate and Sniper Elite 5",
      "url":"https://www.independent.co.uk/games/xbox-game-pass-games-may-2022-b2080986.html",
      "source":"independentUk"
      },
      {
        "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
        "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
        "source":"independentUk"
      },
      {
        "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
        "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
        "source":"independentUk"
      },
      {
        "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
        "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
        "source":"independentUk"
      },
      {
        "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
        "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
        "source":"independentUk"
      },
      {
        "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
        "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
        "source":"independentUk"
      },
      {
        "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
        "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
        "source":"independentUk"
      },
      {
        "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
        "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
        "source":"independentUk"
      },
  ]
  return (
    <div className="homepage">
      <News dados={news_exemplo}></News>
      <FriendsList dados={props_exemplo}></FriendsList>      
    </div>
  );
}