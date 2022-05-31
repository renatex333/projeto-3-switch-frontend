import React from "react";
import FriendsList from "../FriendsList";
import News from "../News";
import "./index.css";
import {useState, useEffect} from "react";
import axios from "axios";
export default function Homepage(props) {

  const props_exemplo = {"data": ["Diogo", "Jorás", "Matheus", "Renatex", "Eduardo", "Ricardo", "Paulo", "Pedro", "Mauro", "Lorena", "Ana", "Joaquina"]};
  // const news_exemplo = [{
  //   "title":"Xbox is working on a small device for playing games over the internet",
  //   "url":"https://www.independent.co.uk/tech/xbox-microsoft-keystone-streaming-cloud-gaming-console-b2089088.html",
  //   "source":"independentUk"
  //   },
  //   {
  //     "title":"Xbox Game Pass’s May 2022 list includes Skate and Sniper Elite 5",
  //     "url":"https://www.independent.co.uk/games/xbox-game-pass-games-may-2022-b2080986.html",
  //     "source":"independentUk"
  //     },
  //     {
  //       "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
  //       "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
  //       "source":"independentUk"
  //     },
  //     {
  //       "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
  //       "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
  //       "source":"independentUk"
  //     },
  //     {
  //       "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
  //       "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
  //       "source":"independentUk"
  //     },
  //     {
  //       "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
  //       "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
  //       "source":"independentUk"
  //     },
  //     {
  //       "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
  //       "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
  //       "source":"independentUk"
  //     },
  //     {
  //       "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
  //       "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
  //       "source":"independentUk"
  //     },
  //     {
  //       "title":"Xbox Game Pass confirms the seven games leaving in May 2022",
  //       "url":"https://www.independent.co.uk/games/xbox-game-pass-may-2022-b2081065.html",
  //       "source":"independentUk"
  //     },
  // ]

  const [news, setNews] = useState([])

  const loadNews = (event) => {
    // event.preventDefault()
        axios
          .get(
              "http://localhost:8000/api/news",

              axios.defaults.xsrfCookieName = 'csrftoken',
              axios.defaults.xsrfHeaderName = 'X-CSRFToken',
              {header : {
                "Origin" : "http://localhost:3000",
                "Access-Control-Allow-Origin" : "*"
              }
            }
              )
          .then((res)=>{ 
            setNews(res.data)
            console.log(res.data)
  }
  )}

  useEffect(() => {
    loadNews();
  },[]);

  return (
    <div className="homepage">
      <News key={0} dados={news}></News>
      <FriendsList dados={props_exemplo}></FriendsList>      
    </div>
  );
}