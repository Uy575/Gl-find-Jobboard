import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ReactIframe from './ReactPlayer';
import play from "../../../Assets/Icons/play.svg";

function ReactPlayerModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
  

  
  
      <img className="playImage" id="play-img" src={play} alt="play video" onClick={handleShow} />
 
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size = 'lg'
        style = {{marginTop:'5rem'}}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <ReactIframe/>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default ReactPlayerModal;