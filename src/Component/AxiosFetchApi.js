import axios from "axios";
import React, { useState } from "react";

function AxiosFetchApi() {
  const [news, setNews] = useState([]);
  const fetchApi = (data) => {
    console.log("clicked");
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setNews(response.name);
    });
  };

  return (
    <div>
      <div>{news ?? news.map((value) => <li>value.data.name</li>)}</div>
      <button onClick={fetchApi}>FETCH API WITH AXIOSLIBRARY</button>
    </div>
  );
}

export default AxiosFetchApi;
