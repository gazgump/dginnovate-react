import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Terms() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}terms`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <div className="terms">
      <FadeIn delay={200} duration={1200}>
      <h1>Terms and Conditions</h1>
      <div className="terms-section">
        <div dangerouslySetInnerHTML={{__html: data.content }}></div>
      </div>
      </FadeIn>
      </div>
    </div>
  );
}
