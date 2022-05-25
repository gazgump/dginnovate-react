import React, { useState, useEffect } from "react";
import axios from 'axios';

import News from './news';
import FadeIn from '../shared/fadein';

export default function NewsPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';


  useEffect(() => {
    axios
      .get(`${url}news-page`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <FadeIn delay={200} duration={1200}>
      <h1>News</h1>
      <div className="news-section">
        <p>{data.content}</p>
        <div className="columns">
          <News />
        </div>
      </div>
      </FadeIn>
    </div>
  );
}
