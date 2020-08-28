import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import './ConfigModal.css';
import { NextButton } from './';

export const ConfigModal = (props) => {
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
        <NextButton variant="primary" onClick={props.onOk}>
          {props.ok}
        </NextButton>
      </Modal.Footer>
      </div>
    </Modal>
  );
};
