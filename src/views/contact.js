import React, { useState, useEffect } from "react";
import axios from 'axios';

import FadeIn from '../shared/fadein';
import { useForm } from 'react-hook-form';

import { init, sendForm } from 'emailjs-com';
init("user_tAEHax1kwV3nZouwonIFi");

export default function Contact() {

  const { register, handleSubmit, watch, errors } = useForm();

  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;


  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
    console.log(data);
    generateContactNumber();
    sendForm('default_service', 'template_g6suxij', '#contact-form')
      .then(function(response) {
        alert('email sent!');
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  }

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}contact`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);



  return (
    <div>
      <div className="contact">
      <FadeIn delay={200} duration={1200}>
        <div className="container">
          <h1>Contact us</h1>
          <div className="contact-blurb">
            {data.blurb}
          </div>
          <div className="columns">
            <div className="column is-full-mobile is-half">
            <h2 className="contact-subtitle">Get in Touch</h2>
            <img className="icon icon-phone" src="phone.svg" alt="phone icon"/>
            <div className="contact-number">
              {data.phone}
            </div>
            <div className="address">
              {data.address}
            </div>
            <form id='contact-form' className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <input type='hidden' name='contact_number' value={contactNumber} />
              {errors.user_name && errors.user_name.type === "required" && (
                <div role="alert">Name is required<br/></div>
              )}
              <input type='text' name='user_name' placeholder='Name' maxLength='30' aria-invalid={errors.user_name ? "true" : "false"} ref={register({ required: true })}/>
              <br/>
              {errors.user_email && errors.user_email.type === "required" && (
                <div role="alert">Email is required<br/></div>
              )}
              <input type='email' name='user_email' placeholder='Email' maxLength='50' aria-invalid={errors.user_email ? "true" : "false"} ref={register({ required: true })}/>
              <br/>
              {errors.message && errors.message.type === "required" && (
                <div role="alert">Message is required<br/></div>
              )}
              <textarea name='message' placeholder='Message' maxLength='1500' aria-invalid={errors.message ? "true" : "false"} ref={register({ required: true })}/>
              <p className='message-chars-left'>Remaining Characters: {messageCharsLeft}</p>

              <button type="submit" className="button primary" value='Send'>Send</button>
            </form>
            </div>
            <div className="column is-full-mobile is-half">
              <div className="email-block">
                <h4>General Enquiries Please Contact</h4>
                <div className="email-address">
                  <img className="icon icon-envelope" src="envelope.svg" alt=""/>
                  <a href="mailto:general@deregallera.com" className="email-link">{data.general}</a>
                </div>
              </div>
              <div className="email-block">
                <h4>Press Enquiries Please Contact</h4>
                <div className="email-address">
                  <img className="icon icon-envelope" src="envelope.svg" alt=""/>
                  <a href="mailto:press@deregallera.com" className="email-link">{data.press}</a>
                </div>
              </div>
              <div className="email-block">
                <h4>Investor Enquiries Please Contact</h4>
                <div className="email-address">
                  <img className="icon icon-envelope" src="envelope.svg" alt=""/>
                  <a href="mailto:investor@deregallera.com" className="email-link">{data.investor}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9915.649415438393!2d-3.2239862!3d51.5881697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5212e91481a5088d!2sDeregallera+Ltd!5e0!3m2!1sen!2suk!4v1562751645021!5m2!1sen!2suk" title="map" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
        </div>
      </FadeIn>
      </div>
    </div>
  );
}
