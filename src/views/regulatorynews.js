import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function RegulatoryNews() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}regulatory-news`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <div className="regulatorynews">
      <FadeIn delay={200} duration={1200}>
      <h1>Regulatory News</h1>
      <div className="regulatorynews-section">
        <div dangerouslySetInnerHTML={{__html: data.content }}></div>
      </div>
      <iframe id="RegNewsIframe" title="regulatory news" width="100%" height="1170" className="responsive" src="https://otp.tools.investis.com/clients/uk/dg_innovate/rns/regulatory-news.aspx?culture=en-GB" ></iframe>
      </FadeIn>
      </div>
    </div>
  );
}
