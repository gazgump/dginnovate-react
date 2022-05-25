import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';

export default function Team() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}teams`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  const engItems = data.sort((a, b) => a.order > b.order ? 1:-1).map((item, tag) =>
      <React.Fragment key={item.id}>
      {item.tag === 'engineering' ?
      <li key={item.id}>
        <div className="team-member">
          <h3 className="member-name">{ item.name }</h3>
          <h5 className="member-role">{ item.role }</h5>
          <div className="member-blurb">
            { item.blurb }
          </div>
        </div>
      </li>
      : null }
      </React.Fragment>
  );

  const matItems = data.sort((a, b) => a.order > b.order ? 1:-1).map((item, tag) =>
    <React.Fragment key={item.id}>
      {item.tag === 'materials' ?
      <li key={item.id}>
        <div className="team-member">
          <h3 className="member-name">{ item.name }</h3>
          <h5 className="member-role">{ item.role }</h5>
          <div className="member-blurb">
            { item.blurb }
          </div>
        </div>
      </li>
      : null }
    </React.Fragment>
  );

  const manItems = data.sort((a, b) => a.order > b.order ? 1:-1).map((item, id) =>
    <React.Fragment key={item.id}>
      { item.tag === 'management' ?
      <li key={item.id}>
        <div className="team-member">
          <h3 className="member-name">{ item.name }</h3>
          <h5 className="member-role">{ item.role }</h5>
          <div className="member-blurb">
            { item.blurb }
          </div>
        </div>
      </li>
      : null }
    </React.Fragment>
  );

  const opsItems = data.sort((a, b) => a.order > b.order ? 1:-1).map((item, tag) =>
    <React.Fragment key={item.id}>
      {item.tag === 'operations' ?
      <li key={item.id}>
        <div className="team-member">
          <h3 className="member-name">{ item.name }</h3>
          <h5 className="member-role">{ item.role }</h5>
          <div className="member-blurb">
            { item.blurb }
          </div>
        </div>
      </li>
      : null }
    </React.Fragment>
  );

  return (
    <div className="container">
      <FadeIn delay={200} duration={1200}>
      <div className="meet-the-team">
        <h1>Meet the team</h1>
        <h2>Management and Operations</h2>
        <ul>
          {manItems}
          {opsItems}
        </ul>
        <h2>Engineering</h2>
        <ul>
          {engItems}
        </ul>
        <h2>Materials Research</h2>
        <ul>
          {matItems}
        </ul>
      </div>
      </FadeIn>
    </div>
  );
}
