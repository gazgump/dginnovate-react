import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Edt() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}edt`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <div className="ebdt">
      <FadeIn delay={200} duration={1200}>
      <h1>Enhanced Drive Technology</h1>
      <div className="top-section">
        <div dangerouslySetInnerHTML={{__html: data.top }}></div>
      </div>
      <div className="container image-container">
        <div className="columns">
          <div className="column is-full-mobile is-one-third-desktop">
            <img src={data.image1} alt="Enhanced Drive technology image1" />
          </div>
          <div className="column is-full-mobile is-one-third-desktop">
            <img src={data.image2} alt="Enhanced Drive technology image2" />
          </div>
          <div className="column is-full-mobile is-one-third-desktop">
            <img src={data.image3} alt="Enhanced Drive technology image3" />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div dangerouslySetInnerHTML={{__html: data.bottom }}></div>
      </div>
      <div className="subpara1-section">
        <div dangerouslySetInnerHTML={{__html: data.subpara1 }}></div>
        <div className="container image-container">
          <div className="columns">
            <div className="column is-full-mobile is-one-third-desktop">
              <img src={data.image4} alt="Marine image1" />
            </div>
            <div className="column is-full-mobile is-one-third-desktop">
              <img src={data.image5} alt="Marine image2" />
            </div>
          </div>
        </div>
      </div>
      <div className="subpara2-section">
        <div dangerouslySetInnerHTML={{__html: data.subpara2 }}></div>
        <div className="container image-container">
          <div className="columns">
            <div className="column is-full-mobile is-one-third-desktop">
              <img src={data.image6} alt="Enhanced Drive technology image4" />
            </div>
            <div className="column is-full-mobile is-one-third-desktop">
              <img src={data.image7} alt="Enhanced Drive technology image5" />
            </div>
            <div className="column is-full-mobile is-one-third-desktop">
              <img src={data.image8} alt="Enhanced Drive technology image6" />
            </div>
          </div>
        </div>
      </div>
      </FadeIn>
      </div>
    </div>
  );
}
