import React, { useState, useEffect } from "react";
import axios from 'axios';

import Advisers from './advisers';
import FadeIn from '../shared/fadein';

export default function AdviserPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}adviser-page`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <div className="advisers">
      <FadeIn delay={200} duration={1200}>
      <h1>Advisers</h1>
      <div className="advisers-section">
        <div className="top-content">
          <div dangerouslySetInnerHTML={{__html: data.content }}></div>
        </div>
        <Advisers />
      </div>
      </FadeIn>
      </div>
    </div>
  );
}
