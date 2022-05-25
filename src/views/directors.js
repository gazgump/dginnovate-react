import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../shared/modal.js';

export default function Directors() {

  const [data, setData] = useState([]);

  const url = 'https://dginnovate.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}directors`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  const ToggleContent = ({ toggle, content }) => {
    const [isShown, setIsShown] = React.useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);

    return (
      <React.Fragment>
        {toggle(show)}
        {isShown && content(hide)}
      </React.Fragment>
    );
  }

  const Modal = ({ children }) => (
    ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-background"></div>
        {children}
      </div>,
      document.getElementById('modal-root')
    )
  );

  const listItems = data.sort((a, b) => a.order > b.order ? 1:-1).map((item) =>
    <React.Fragment key={item.id}>
      <div className="column is-full-mobile is-one-third">
        <div className="directors-section">
        <ToggleContent
          toggle={show => <button className="card-button" onClick={show}>
          <div className="director">
            <div className="image-container">
              <img className="director-image" src={ item.image } alt={item.name + "profile image"}/>
            </div>
            <p className="director-title">{ item.name }</p>
            <p className="director-jobtitle">{ item.jobtitle }</p>
          </div>
          </button>}
          content={hide => (
            <Modal>
              <div className="modal-content">
                <div className="modal-header">
                  <p className="director-title">{ item.name }, { item.jobtitle }</p>
                </div>
                <div className="modal-body">
                  <div className="columns">
                    <div className="column is-full-mobile is-one-third">
                      <img className="director-image" src={ item.image } alt={item.name + "profile image"}/>
                    </div>
                    <div className="column is-full-mobile is-two-thirds">
                      <p className="director-description">{ item.description }</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button onClick={hide}>Close</button>
                </div>
              </div>
            </Modal>
          )}
        ></ToggleContent>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <>
    <div className="columns">
        {listItems}
    </div>
    </>
  );
}
