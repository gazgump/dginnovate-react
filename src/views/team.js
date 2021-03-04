import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Team() {

  const [data, setData] = useState([]);

  const url = 'https://deregallera.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}teams`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  const engItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <li key={item.id}>
      {item.tag === 'engineering' ?
      <div className="team-member">
        <h3 className="member-name">{ item.name }</h3>
        <h5 className="member-role">{ item.role }</h5>
        <div className="member-blurb">
          { item.blurb }
        </div>
      </div>
      : null }
    </li>
  );

  const matItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <li key={item.id}>
      {item.tag === 'materials' ?
      <div className="team-member">
        <h3 className="member-name">{ item.name }</h3>
        <h5 className="member-role">{ item.role }</h5>
        <div className="member-blurb">
          { item.blurb }
        </div>
      </div>
      : null }
    </li>
  );

  const manItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, id) =>
    <li key={item.id}>
      { item.tag === 'management' ?
      <div className="team-member">
        <h3 className="member-name">{ item.name }</h3>
        <h5 className="member-role">{ item.role }</h5>
        <div className="member-blurb">
          { item.blurb }
        </div>
      </div>
      : null }
    </li>
  );

  const opsItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <li key={item.id}>
      {item.tag === 'operations' ?
      <div className="team-member">
        <h3 className="member-name">{ item.name }</h3>
        <h5 className="member-role">{ item.role }</h5>
        <div className="member-blurb">
          { item.blurb }
        </div>
      </div>
      : null }
    </li>
  );

  return (
    <div className="container">
      <FadeIn delay={200} duration={1200}>
      <div className="meet-the-team">
        <h1>Meet the team</h1>
        <h2>Engineering</h2>
        <ul>
          {engItems}
        </ul>
        <h2>Materials Research</h2>
        <ul>
          {matItems}
        </ul>
        <h2>Management and Operations</h2>
        <ul>
          {manItems}
          {opsItems}
        </ul>
      </div>
      </FadeIn>
    </div>
  );
}
