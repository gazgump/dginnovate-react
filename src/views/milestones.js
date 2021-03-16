import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Milestones() {

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}milestones`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  const tenItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2010' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const elevItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2011' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const twelItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2012' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const thirItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2013' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const fourItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2014' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const fiftItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2015' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const sixtItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2016' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const sevenItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2017' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const eightItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2018' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const nineItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2019' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const twenItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2020' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const twenoneItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2021' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const twentwoItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2022' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  const twenthreeItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item, tag) =>
    <div key={item.id}>
      {item.year === '2023' ?
      <div className={item.tag === "right" ? "milestone right" : "milestone left"}>
        <div className="milestone-dot"></div>
        <h4 className="milestone-title">{ item.title }</h4>
        {item.subtitle ?
          <p className="milestone-subtitle">{ item.subtitle }</p>
        : null }
        <div className="milestone-icon">
          <span className={"icon icon-" + item.icon}></span>
        </div>
      </div>
      : null }
    </div>
  );

  return (
    <div className="container">
      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="year-2010">
          <div className="year-tag">2009 / 10</div>
          {tenItems}
        </div>
        <div className="year-2011">
          <div className="year-tag">2011</div>
          {elevItems}
        </div>
        <div className="year-2012">
          <div className="year-tag">2012</div>
          {twelItems}
        </div>
        <div className="year-2013">
          <div className="year-tag">2013</div>
          {thirItems}
        </div>
        <div className="year-2014">
          <div className="year-tag">2014</div>
          {fourItems}
        </div>
        <div className="year-2015">
          <div className="year-tag">2015</div>
          {fiftItems}
        </div>
        <div className="year-2016">
          <div className="year-tag">2016</div>
          {sixtItems}
        </div>
        <div className="year-2017">
          <div className="year-tag">2017</div>
          {sevenItems}
        </div>
        <div className="year-2018">
          <div className="year-tag">2018</div>
          {eightItems}
        </div>
        <div className="year-2019">
          <div className="year-tag">2019</div>
          {nineItems}
        </div>
        <div className="year-2020">
          <div className="year-tag">2020</div>
          {twenItems}
        </div>
        <div className="year-2021">
          <div className="year-tag">2021</div>
          {twenoneItems}
        </div>
        <div className="year-2022">
          <div className="year-tag">2022</div>
          {twentwoItems}
        </div>
        <div className="year-2023">
          <div className="year-tag">2023</div>
          {twenthreeItems}
        </div>
      </div>
    </div>
  );
}
