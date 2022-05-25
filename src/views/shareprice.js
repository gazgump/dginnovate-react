import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function SharePrice() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}shareprice`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <div className="shareprice">
      <FadeIn delay={200} duration={1200}>
      <h1>Share Price</h1>
      <div className="shareprice-section">
        <div dangerouslySetInnerHTML={{__html: data.content }}></div>
      </div>
      {loaded ? null : (
        <div className="shareprice-loader">
          <img className="dgi-loader" src="dgi-loader.gif" width="80" height="80" alt="loading gif"/>
        </div>
      )}
      
      <iframe id="ShareCenterIframe" onLoad={() => setLoaded(true)} title="share center" width="100%" height="1400px" className="responsive" src="https://www.connectidfeed.com/en/dg-innovate-plc-share-price-center-premium" ></iframe>
      </FadeIn>
      </div>
    </div>
  );
}
