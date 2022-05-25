import React, { useState } from "react";
import '../assets/css/mmenu.css';

import {
  Link
} from "react-router-dom";

export default function Nav() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <a className="navbar-item logo" href="/">
        <img src="https://res.cloudinary.com/deregallera/image/upload/v1616674670/dgi-logo.png" alt="logo" width="175" height="28"/>
      </a>
      <a href="#nav-menu">
        <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMobile">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </a>
      </div>

      <div id="navbarMobile" className='navbar-menu'>
        <div className="navbar-start">
          <nav id="nav-menu">
            <ul>
              <li><Link className="home navbar-item" to='/home' onClick={() => setShowMenu(!showMenu)}><span>Home</span></Link></li>
              <li className="has-children">
                <Link className="about-us navbar-item" to='/about' onClick={() => setShowMenu(!showMenu)}><span>About us</span>
                <span className="arrow arrow-down"></span>
                </Link>
                 <ul>
                  <li><Link className="history navbar-item" to='/history' onClick={() => setShowMenu(!showMenu)}><span>History</span></Link></li>
                  <li><Link className="esg navbar-item" to='/esg' onClick={() => setShowMenu(!showMenu)}><span>ESG</span></Link></li>
                </ul>
              </li>
              <li className="has-children">
                <Link className="technologies navbar-item" to='/technologies' onClick={() => setShowMenu(!showMenu)}><span>Technologies</span>
                <span className="arrow arrow-down"></span>
                </Link>
                 <ul>
                  <li><Link className="ebt navbar-item" to='/enhanced-battery-technology' onClick={() => setShowMenu(!showMenu)}><span>EBT</span></Link></li>
                  <li><Link className="edt navbar-item" to='/enhanced-drive-technology' onClick={() => setShowMenu(!showMenu)}><span>EDT</span></Link></li>
                  <li><Link className="facilities navbar-item" to='/facilities' onClick={() => setShowMenu(!showMenu)}><span>Facilities</span></Link></li>
                </ul>
              </li>
              <li className="has-children investors">
                <Link className="investors navbar-item" to='/investors' onClick={() => setShowMenu(!showMenu)}><span>Investors</span>
                <span className="arrow arrow-down"></span>
                </Link>
                 <ul>
                  <li><Link className="shareprice navbar-item" to='/share-price' onClick={() => setShowMenu(!showMenu)}><span>Share Price</span></Link></li>
                  <li><Link className="regulatorynews navbar-item" to='/regulatory-news' onClick={() => setShowMenu(!showMenu)}><span>Regulatory News</span></Link></li>
                  <li><Link className="reports navbar-item" to='/reports-documents' onClick={() => setShowMenu(!showMenu)}><span>Reports &amp; Documents</span></Link></li>
                  <li><Link className="directors navbar-item" to='/directors' onClick={() => setShowMenu(!showMenu)}><span>Directors</span></Link></li>
                  <li><Link className="advisers navbar-item" to='/advisers' onClick={() => setShowMenu(!showMenu)}><span>Advisers</span></Link></li>
                </ul>
              </li>
              <li><Link className="news navbar-item" to='/news' onClick={() => setShowMenu(!showMenu)}><span>News</span></Link></li>
              <li>
                <Link className="contact navbar-item" to='/contact' onClick={() => setShowMenu(!showMenu)}><span>Contact us</span></Link>
              </li>
              <li className="ticker is-hidden-touch">
                <iframe id="SharePriceTicker" title="share ticker" width="100%" height="19px" className="responsive" src="https://irs.tools.investis.com/clients/uk/dginnovate_plc/ticker/ticker.aspx?culture=en-GB" ></iframe>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </nav>
  );
}
