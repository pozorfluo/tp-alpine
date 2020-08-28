import React from 'react';
import { NextButton, ConfigStatus } from './';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import configMachine from '../machines/Configurator';


export const Footer = (props) => {
  return (
    <footer className="fixed-bottom">
      <Row>
        <Col md="8" className="align-items-center">
          <ConfigStatus />
        </Col>
        <Col md="4">
          <NextButton         onClick={() => {
          configMachine.send('next');
        }}>suivant</NextButton>
        </Col>
      </Row>
    </footer>
  );
};
