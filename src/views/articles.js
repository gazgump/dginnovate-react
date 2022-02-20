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

  const url = 'https://dginnovate.herokuapp.com';

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${url + "/articles?slug=" + id}`)
      .then(function(response) {
        setData(response.data[0])
      })
      .catch(error => console.log(error));

  }, [id]);


  return (

    <div className="container">
      <FadeIn delay={200} duration={1400}>
      { data ?
      <div className="news-article">
        <h1 className="article-title">{data.name}</h1>
        <Back/>

        <img className="article-image" src={data.image} alt={data.name}/>

        <div className="article-description" dangerouslySetInnerHTML={{__html: data.description }}></div>
        <div className="share-buttons">
          <EmailShareButton url={window.location.href}><EmailIcon></EmailIcon></EmailShareButton>
          <FacebookShareButton url={window.location.href}><FacebookIcon></FacebookIcon></FacebookShareButton>
          <LinkedinShareButton url={window.location.href}><LinkedinIcon></LinkedinIcon></LinkedinShareButton>
          <TwitterShareButton url={window.location.href}><TwitterIcon></TwitterIcon></TwitterShareButton>
          <WhatsappShareButton url={window.location.href}><WhatsappIcon></WhatsappIcon></WhatsappShareButton>
        </div>
      </div>
      : 'loading' }
      </FadeIn>
    </div>
  );
}
