import React from 'react';
import './OptionList.css';

export const OptionList = (props) => {
  return (
    <div
      className="option-list px-3"
    >
      {props.children}
    </div>
  );
};
