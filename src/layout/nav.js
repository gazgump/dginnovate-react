import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Link
} from "react-router-dom";

export default function Nav() {

  const [data, setData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const url = 'https://dginnovate.herokuapp.com/';

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
        <img src="https://res.cloudinary.com/deregallera/image/upload/v1614855384/d-logo.png" alt="logo" width="175" height="28"/>
      </a>
        <button onClick={() => setShowMenu(!showMenu)} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMobile">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>


      <div id="navbarMobile" className='navbar-menu'>
        <div className="navbar-start">
          {listItems}
        </div>
      </div>

      <div className={ showMenu ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-content">
          {listItems}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={() => setShowMenu(!showMenu)}></button>
      </div>

    </nav>
  );
}
