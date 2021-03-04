import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Footer() {

  const [homeData, setHome] = useState([]);
  const [navData, setData] = useState([]);
  const [newsData, setNews] = useState([]);

  const url = 'https://deregallera.herokuapp.com/';

  let one = `${url}navigations`;
  let two = `${url}articles`;
  let three = `${url}homepage`;

  useEffect(() => {
    const fetchData = async () => {
      const request1 = await axios(one);
      const request2 = await axios(two);
      const request3 = await axios(three);

      setData(request1.data);
      setNews(request2.data);
      setHome(request3.data);
    };

    fetchData()

  }, []);

  const newsItems = newsData.map((item) =>
    <li className="news-article" key={item.id}>
      <a href={"/articles/" + item.id}><p>{item.name}</p></a>
    </li>
  );

  const navItems = navData.map((item) =>
    <li className="nav-item" key={item.id}>
      <a href={'/' + item.slug}><p>{item.name}</p></a>
    </li>
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-full-mobile is-one-third">
            <img src="https://res.cloudinary.com/deregallera/image/upload/v1614855384/d-logo.png" width="175" height="28"/>
            <div className="company-address">
              {homeData.address}
            </div>
            <div className="company-number">
              {homeData.company}
            </div>
            <img src={homeData.bsi}/>
            <p className="copyright">{homeData.copyright}</p>
          </div>
          <div className="column is-full-mobile is-one-third">
            <ul className="nav-list">
              {navItems}
            </ul>
          </div>
          <div className="column is-full-mobile is-one-third">
            <h4 className="latest-news">Latest News</h4>
            <ul>
              {newsItems}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
