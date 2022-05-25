import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Advisers() {

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}advisers`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  const listItems = data.sort((a, b) => a.order > b.order ? 1:-1).map((item) =>
    <div className="adviser" key={item.id}>
      <div className="columns">
        <div className="column is-full-mobile is-half">
          <p className="adviser-title">{ item.title }</p>
        </div>
        <div className="column is-full-mobile is-half">
          <div className="address">
            <div dangerouslySetInnerHTML={{__html: item.address }}></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {listItems}
    </div>
  );
}
