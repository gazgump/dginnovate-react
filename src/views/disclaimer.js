import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Disclaimer() {

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}disclaimer`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <div className="disclaimer">
      <FadeIn delay={200} duration={1200}>
      <h1>Disclaimer</h1>
      <div className="disclaimer-section">
        <div dangerouslySetInnerHTML={{__html: data.content }}></div>
      </div>
      </FadeIn>
      </div>
    </div>
  );
}
