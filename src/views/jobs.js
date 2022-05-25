import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

import Vacancies from './vacancies';

export default function Jobs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}join`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <FadeIn delay={200} duration={1200}>
      <div className="jobs">
        <h1>Join the team</h1>
        <img src={data.image} alt={data.image} />
        <p className="job-blurb">
          {data.blurb}
        </p>
        <Vacancies />
      </div>
      </FadeIn>
    </div>
  );
}
