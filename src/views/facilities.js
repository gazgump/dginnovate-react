import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Facilities() {

  const [data, setData] = useState([]);

  const url = 'https://deregallera.herokuapp.com/';

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
      </FadeIn>
      </div>
    </div>
  );
}
