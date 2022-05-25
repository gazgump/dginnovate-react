import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Reports() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}reports`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <div className="reports">
      <FadeIn delay={200} duration={1200}>
      <h1>Reports</h1>
      <div className="reports-section">
        <div dangerouslySetInnerHTML={{__html: data.content }}></div>
      </div>
      <iframe id="inv-alerts-tool" title="inv-alerts-tool" width="100%" height="800px" className="responsive" src="https://otp.tools.investis.com/clients/uk/dg_innovate/cas/default.aspx?culture=en-GB" data-alerts-tool-url="https://otp.tools.investis.com/clients/uk/dg_innovate/cas/default.aspx?culture=en-GB"></iframe>
      </FadeIn>
      </div>
    </div>
  );
}
