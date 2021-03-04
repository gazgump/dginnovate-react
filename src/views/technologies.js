import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Technologies() {

  const [data, setData] = useState([]);

  const url = 'https://deregallera.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}technologies`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  const listItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item) =>

    <div className="technologies">
      {item.tag === "right" ?
      <div className="columns right">
      <div className="column is-full-mobile is-two-thirds-desktop">
        <h2 className="tech-name">{ item.title }</h2>
        <div className="tech-description">
          { item.description }
        </div>
      </div>
        <div className="column is-full-mobile is-one-third-desktop">
          <img src={item.image} alt="technology type" />
        </div>
      </div>
      :
      <div className="columns left">
        <div className="column is-full-mobile is-one-third-desktop">
          <img src={item.image} alt="technology type" />
        </div>
        <div className="column is-full-mobile is-two-thirds-desktop">
          <h2 className="tech-name">{ item.title }</h2>
          <div className="tech-description">
            { item.description }
          </div>
        </div>
      </div>
      }
    </div>
  );

  return (
    <div className="container">
      <FadeIn delay={200} duration={1200}>
      <h1>Technologies</h1>
        <div className="technologies-section">
          {listItems}
        </div>
      </FadeIn>
    </div>
  );
}
