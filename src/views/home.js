import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

import FadeIn from '../shared/fadein';

export default function Home() {

  const [data, setData] = useState([]);
  const [newsData, setNews] = useState([]);

  const url = 'https://deregallera.herokuapp.com/';

  let one = `${url}homepage`;
  let two = `${url}articles`;

  useEffect(() => {
    const fetchData = async () => {
      const request1 = await axios(one);
      const request2 = await axios(two);

      setData(request1.data);
      setNews(request2.data);
    };

    fetchData()

  }, []);

  const thumbItems = newsData.sort((a, b) => a.date > b.date ? -1: 1).map((item) =>
    <div className="column is-full-mobile is-half is-one-quarter-desktop" key={item.id}>
      <div className="overlay-container">
        <div className="news-thumb">
          <a href={"/articles/" + item.id}><img className="news-image" src={item.image} /></a>
        </div>
        <div class="overlay">
          <div class="text">{item.name}</div>
          <a href={"/articles/" + item.id}><button className="button primary inverted">Read more</button></a>
        </div>

      </div>
    </div>
  );

  return (
    <div>
    <FadeIn delay={200} duration={1200}>
      <div className="container">
        <div className="studio-blurb">
          { data.blurb }
        </div>
      </div>

      <div dangerouslySetInnerHTML={{__html: data.mission }}></div>
    </FadeIn>

      <div className="container">
        <div className="partners-section">
          <span className="partner-blurb">{ data.partner }</span>

          <div className="columns">
            <div className="column">
              <img src={data.image1} />
            </div>
            <div className="column">
              <img src={data.image2} />
            </div>
            <div className="column">
              <img src={data.image3} />
            </div>
          </div>
          <Link to="/partners" className="button primary">See all of our partners</Link>
        </div>
      </div>
      <div className="latest-news-section">
        <div dangerouslySetInnerHTML={{__html: data.latest }}></div>
        <div className="columns">
          {thumbItems.slice(0, 4)}
        </div>
      </div>
      <div className="container">
        <div className="bottom-text">
          { data.bottomtext }
        </div>
      </div>
    </div>
  );
}
