import React, { useState, useEffect } from "react";
import axios from 'axios';

import {
  Link
} from "react-router-dom";

export default function Footer() {

  const [homeData, setHome] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {

    let three = `${url}homepage`;

    const fetchData = async () => {

      const request3 = await axios(three);

      setHome(request3.data);
    };

    fetchData()

  }, []);


  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <ul className="footer-nav">
              <li><Link className="disclaimer footer-item" to='/disclaimer'><span>Disclaimer</span></Link></li>
              <li><Link className="privacy footer-item" to='/privacy'><span>Privacy</span></Link></li>
              <li><Link className="accessibility footer-item" to='/accessibility'><span>Accessibility</span></Link></li>
              <li><Link className="terms footer-item" to='/terms'><span>Terms and Conditions</span></Link></li>
              <li><Link className="sitemap footer-item" to='/sitemap'><span>Site Map</span></Link></li>
            </ul>
          </div>
          <div className="column is-full-mobile is-one-third">
            <img src="https://res.cloudinary.com/deregallera/image/upload/v1616674670/dgi-logo.png" alt="logo" width="175" height="28"/>
            <div className="company-address">
              {homeData.address}
            </div>
          </div>
          <div className="column is-full-mobile is-one-third">
            <div className="company-number">
              {homeData.company}
            </div>
          </div>
          <div className="column is-full-mobile is-one-third">
            <img src={homeData.bsi} alt={homeData.bsi}/>
            <p className="copyright">{homeData.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
