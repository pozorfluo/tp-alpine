import React from 'react';
import { NextButton, ConfigStatus } from './';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useConfigMachineEmit} from '../machines';

export const Footer = (props) => {
  const emit = useConfigMachineEmit();

  return (
    <footer className="fixed-bottom">
      <Row>
        <Col md="8" className="align-items-center">
          <ConfigStatus />
        </Col>
        <Col md="4">
          <NextButton
            onClick={() => {
              emit('next');
            }}
          >
            suivant
          </NextButton>
        </Col>
      </Row>
    </footer>
  );
};
