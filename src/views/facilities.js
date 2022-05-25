import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Facilities() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}facilities`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <div className="facilities">
      <FadeIn delay={200} duration={1200}>
      <h1>Facilities</h1>
      <p className="facilities-blurb">{data.blurb}</p>
      <img src={data.image} alt="Our office" />
      <div className="hardware-section">
        <div dangerouslySetInnerHTML={{__html: data.hardware }}></div>
      </div>
      <div className="container image-container">
        <div className="columns">
          <div className="column is-full-mobile is-one-third-desktop">
            <img src={data.image1} alt="Facilities image1" />
          </div>
          <div className="column is-full-mobile is-one-third-desktop">
            <img src={data.image2} alt="Facilities image2" />
          </div>
          <div className="column is-full-mobile is-one-third-desktop">
            <img src={data.image3} alt="Facilities image3" />
          </div>
        </div>
      </div>
      </FadeIn>
      </div>
    </div>
  );
}
