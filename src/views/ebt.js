import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Ebt() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}ebt`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <div className="ebt">
      <FadeIn delay={200} duration={1200}>
      <h1>Enhanced Battery Technology</h1>
      <div className="top-section">
        <div dangerouslySetInnerHTML={{__html: data.top }}></div>
      </div>
      <div className="container image-container">
        <div className="columns">
          <div className="column is-full-mobile is-one-third-desktop">
            <img src={data.image1} alt="Enhanced battery technology image1" />
          </div>
          <div className="column is-full-mobile is-one-third-desktop">
            <img src={data.image2} alt="Enhanced battery technology image2" />
          </div>
          <div className="column is-full-mobile is-one-third-desktop">
            <img src={data.image3} alt="Enhanced battery technology image3" />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div dangerouslySetInnerHTML={{__html: data.bottom }}></div>
      </div>
      </FadeIn>
      </div>
    </div>
  );
}
