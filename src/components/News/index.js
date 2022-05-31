import React from "react";
import "./index.css";
import { useState } from "react";

export default function News(props) {
  // const [news, setNews] = useState([])

//   const loadNews = (event) => {
//     event.preventDefault()
//         axios
//           .get(
//               "localhost:5432/api/news",

//               axios.defaults.xsrfCookieName = 'csrftoken',
//               axios.defaults.xsrfHeaderName = 'X-CSRFToken',
//               {header : {
//                 "Origin" : "http://localhost:3000",
//                 "Access-Control-Allow-Origin" : "http://localhost:8000"
//               }
//             }
//               )
//           .then((res)=>{ 
//             console.log(res.data)
//             setNews(res.data)
//   }
// )}

// useEffect(() => {
//   loadNews();
// });
  return (
    <div className="news-block">
      <h1 className="news">News</h1>
      <div className="news-list">
        {props.dados.map((dados) => (
          <div className="news-card">
            <a className = "news-title a" href={dados.url} target="_blank" rel="noreferrer noopener">{dados.title}</a>
            <p className="news-source">Source: {dados.source}</p>
          </div>
          ))}
      </div>
    </div>
  );
}