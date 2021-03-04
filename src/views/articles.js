import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  useParams
} from "react-router-dom";

import FadeIn from '../shared/fadein';

export default function Articles() {

  const [data, setData] = useState([]);

  const url = 'https://deregallera.herokuapp.com/';

  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    axios
      .get(`${url + "articles/" + id}`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <FadeIn delay={200} duration={1400}>
      <div className="news-article">
        <h1 className="article-title">{data.name}</h1>

        <img className="article-image" src={data.image} alt="article image"/>

        <div className="article-description" dangerouslySetInnerHTML={{__html: data.description }}></div>
      </div>
      </FadeIn>
    </div>
  );
}
