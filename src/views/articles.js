import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  useParams,
  useHistory
} from "react-router-dom";

import FadeIn from '../shared/fadein';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

export default function Articles() {

  const Back = () => {
    let history = useHistory();
      return (
          <>
            <button className="primary button back" onClick={() => history.goBack()}>Back</button>
          </>
      );
  };

  const [data, setData] = useState([]);

  const url = 'https://deregallera.herokuapp.com/';

  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    axios
      .get(`${url + "articles/" + id}`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className="container">
      <FadeIn delay={200} duration={1400}>
      <div className="news-article">
        <h1 className="article-title">{data.name}</h1>
        <Back/>

        <img className="article-image" src={data.image} alt="article image"/>

        <div className="article-description" dangerouslySetInnerHTML={{__html: data.description }}></div>
        <div className="share-buttons">
          <EmailShareButton url={window.location.href}><EmailIcon></EmailIcon></EmailShareButton>
          <FacebookShareButton url={window.location.href}><FacebookIcon></FacebookIcon></FacebookShareButton>
          <LinkedinShareButton url={window.location.href}><LinkedinIcon></LinkedinIcon></LinkedinShareButton>
          <TwitterShareButton url={window.location.href}><TwitterIcon></TwitterIcon></TwitterShareButton>
          <WhatsappShareButton url={window.location.href}><WhatsappIcon></WhatsappIcon></WhatsappShareButton>
        </div>
      </div>
      </FadeIn>
    </div>
  );
}
