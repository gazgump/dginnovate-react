import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function About() {

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}about`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <FadeIn delay={200} duration={1200}>
      <h1>About us</h1>
      <div>
        <div className="paragraph1">
          <div dangerouslySetInnerHTML={{__html: data.paragraph1 }}></div>
          <div dangerouslySetInnerHTML={{__html: data.video1 }}></div>
        </div>
        <div className="paragraph2">
          <div dangerouslySetInnerHTML={{__html: data.paragraph2 }}></div>
          <div dangerouslySetInnerHTML={{__html: data.video2 }}></div>
        </div>
        <div className="paragraph3">
          <div dangerouslySetInnerHTML={{__html: data.paragraph3 }}></div>
          <div className="container image-container">
            <div className="columns">
              <div className="column is-full-mobile is-one-third-desktop">
                <img src={data.motor1} alt="Motor image1" />
              </div>
              <div className="column is-full-mobile is-one-third-desktop">
                <img src={data.motor2} alt="Motor image2" />
              </div>
              <div className="column is-full-mobile is-one-third-desktop">
                <img src={data.motor3} alt="Motor image3" />
              </div>
            </div>
          </div>
        </div>
        <div className="paragraph4">
          <div dangerouslySetInnerHTML={{__html: data.paragraph4 }}></div>
          <div className="container image-container">
            <div className="columns">
              <div className="column is-full-mobile is-half is-one-quarter-desktop">
                <img src={data.materials1} alt="Materials image1" />
              </div>
              <div className="column is-full-mobile is-half is-one-quarter-desktop">
                <img src={data.materials2} alt="Materials image2" />
              </div>
              <div className="column is-full-mobile is-half is-one-quarter-desktop">
                <img src={data.materials3} alt="Materials image3" />
              </div>
              <div className="column is-full-mobile is-half is-one-quarter-desktop">
                <img src={data.materials4} alt="Materials image4" />
              </div>
            </div>
          </div>
        </div>
        <div className="paragraph5">
          <div dangerouslySetInnerHTML={{__html: data.paragraph5 }}></div>
          <div class="download-link full">
            <a href={ data.document } target="_blank" rel="noreferrer" download><p>Download - Faraday funded projects to date booklet</p> <span class="arrow arrow-down"></span></a>
          </div>
        </div>
        <div className="paragraph6">
          <div dangerouslySetInnerHTML={{__html: data.paragraph6 }}></div>
        </div>
      </div>
      </FadeIn>
    </div>
  );
}
