import React, { useState, useEffect } from "react";
import axios from 'axios';

import Directors from './directors';
import FadeIn from '../shared/fadein';

export default function DirectorsPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}directors-page`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <div className="directors">
      <FadeIn delay={200} duration={1200}>
      <h1>Directors</h1>
      <div className="directors-section">
        <div className="top-content">
          <div dangerouslySetInnerHTML={{__html: data.content }}></div>
        </div>
        <Directors />
        <div id="modal-root"></div>
      </div>
      </FadeIn>
      </div>
    </div>
  );
}
