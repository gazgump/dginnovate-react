import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Privacy() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}privacy`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <FadeIn delay={200} duration={1200}>
        <div className="policy">
          <h1>Privacy Policy</h1>
          <div dangerouslySetInnerHTML={{__html: data.policy }}></div>
        </div>
      </FadeIn>
    </div>
  );
}
