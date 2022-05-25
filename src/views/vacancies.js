import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Vacancies() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}vacancies`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  const listItems = data.map((item) =>
  <div className="vacancy" key={item.id}>
    <h3 className="role">{ item.role }</h3>
    <p className="hours">{ item.hours }</p>
    <p className="manager">{ item.manager }</p>
    <div className="info">
      { item.info }
    </div>
    <a href={item.link} target="_blank" rel="noreferrer">Download the full job specification.</a>
  </div>
  );

  return (
    <div>
      {listItems}
    </div>
  );
}
