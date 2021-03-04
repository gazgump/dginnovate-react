import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Partners() {

  const [data, setData] = useState([]);

  const url = 'https://deregallera.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}partners`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  const listItems = data.map((item) =>
    <div className="partner">
      <div className="columns">
        <div className="column is-full-mobile is-one-fifth">
          <img src={item.image} alt="partner image"/>
        </div>
        <div className="column is-full-mobile is-four-fifths">
          <h3 className="partner-title">{ item.title }</h3>
          <div className="partner-blurb">
            { item.description }
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <FadeIn delay={200} duration={1200}>
      <h1>Deregallera Partners</h1>
      {listItems}
      </FadeIn>
    </div>
  );
}
