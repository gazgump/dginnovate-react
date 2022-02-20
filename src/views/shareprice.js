import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function SharePrice() {

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}shareprice`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <div className="shareprice">
      <FadeIn delay={200} duration={1200}>
      <h1>Share Price</h1>
      <div className="shareprice-section">
        <div dangerouslySetInnerHTML={{__html: data.content }}></div>
      </div>
      </FadeIn>
      </div>
    </div>
  );
}
