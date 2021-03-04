import React, { useState, useEffect } from "react";
import axios from 'axios';

import Milestones from './milestones';
import FadeIn from '../shared/fadein';

export default function About() {

  const [data, setData] = useState([]);

  const url = 'https://deregallera.herokuapp.com/';

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
        <div className="about-blurb">
          {data.blurb}
        </div>
        <Milestones />
      </div>
      </FadeIn>
    </div>
  );
}
