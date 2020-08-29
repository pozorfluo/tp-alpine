import React from 'react';
import './NextButton.css';
import { Button } from 'react-bootstrap';

export const NextButton = (props) => {
  return (
    <Button className="skew next-button" size="lg" onClick={props.onClick}>
      <div className="unskew">{props.children}</div>
    </Button>
  );
};
