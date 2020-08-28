import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import './ConfigModal.css';
import { NextButton } from './';
import { useHistory } from 'react-router-dom';

export const ConfigModal = (props) => {
  let history = useHistory();

  function handleOk() {
    props.onOk();
    console.log(props.redirect);
    if(props.redirect) {
      history.push(props.redirect);
    }
  }
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="modal-title"
      className="skew"
      centered
    >
      <div className="unskew">
        <Modal.Header className="skew">
          <Modal.Title id="modal-title">{props.title}</Modal.Title>
          <hr />
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <NextButton variant="secondary" onClick={props.onHide}>
            {props.cancel}
          </NextButton>
          <NextButton variant="primary" onClick={handleOk}>
            {props.ok}
          </NextButton>

        </Modal.Footer>
      </div>
    </Modal>
  );
};

// export default withRouter(ConfigModal);
