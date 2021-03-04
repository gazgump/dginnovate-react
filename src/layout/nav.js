import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Link
} from "react-router-dom";

export default function Nav() {

  const [data, setData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const url = 'https://deregallera.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}navigations`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  const listItems = data.sort((a, b) => a.id > b.id ? 1:-1).map((item) =>
    <Link key={item.id} className={item.slug + " navbar-item"} to={'/' + item.slug} onClick={() => setShowMenu(!showMenu)}><span>{item.name}</span></Link>
  );

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <a className="navbar-item logo" href="/">
        <img src="https://res.cloudinary.com/deregallera/image/upload/v1614855384/d-logo.png" width="175" height="28"/>
      </a>
        <a role="button" onClick={() => setShowMenu(!showMenu)} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMobile">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>


      <div id="navbarMobile" className={ showMenu ? 'navbar-menu' : 'navbar-menu hidden'} >
        <div className="navbar-start">
          {listItems}
        </div>
      </div>

    </nav>
  );
}
