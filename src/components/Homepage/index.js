import React from "react";
import FriendsList from "../FriendsList";
import News from "../News";
import "./index.css";
import {useState, useEffect} from "react";
import axios from "axios";
export default function Homepage(props) {

  const props_exemplo = {"data": ["Diogo", "Jorás", "Matheus", "Renatex", "Eduardo", "Ricardo", "Paulo", "Pedro", "Mauro", "Lorena", "Ana", "Joaquina"]};
  const [news, setNews] = useState([])

  const loadNews = (event) => {
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