import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Partners() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}partners`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  const listItems = data.sort((a, b) => a.id > b.id ? 1: -1).map((item) =>
    <div className="partner">
      <div className="columns">
        <div className="column is-full-mobile is-one-fifth">
          <a href={ item.link } target="_blank" rel="noreferrer">
            <img src={item.image} alt={ item.title }/>
          </a>
        </div>
        <div className="column is-full-mobile is-four-fifths">
          <a href={ item.link } target="_blank" rel="noreferrer">
            <h3 className="partner-title">{ item.title }</h3>
          </a>
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
      <h1>Partners</h1>
      {listItems}
      </FadeIn>
    </div>
  );
}
