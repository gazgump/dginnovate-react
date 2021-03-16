import React, { useState, useEffect } from "react";
import axios from 'axios';

import Moment from 'moment';
import FadeIn from '../shared/fadein';

export default function News() {

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';


  useEffect(() => {
    axios
      .get(`${url}articles`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  const listItems = data.sort((a, b) => a.date > b.date ? -1: 1).map((item) =>
    <div className="column is-full-mobile is-half" key={item.id}>
      <div className="news-article" key={item.id}>
        <a href={"/articles/" + item.slug}>
          <div className="article-image">
            <img src={item.image} alt={item.name}/>
            <span className="article-date">
            {Moment(item.date).format('Do MMM YYYY')}
            </span>
          </div>
        </a>
        <h3 className="article-name">{ item.name }</h3>
        <div className="article-description" dangerouslySetInnerHTML={{__html: item.description.substring(0, 300) }}></div>
        <a className="button primary" href={"/articles/" + item.slug}>Continue Reading</a>
      </div>
    </div>
  );

  return (
    <div className="container">
      <FadeIn delay={200} duration={1200}>
      <h1>Deregallera News Articles</h1>
      <div className="news-section">
        <div className="columns">
          {listItems}
        </div>
      </div>
      </FadeIn>
    </div>
  );
}
