import React from 'react';
import { useSelector } from 'react-redux';
import './ConfigSummary.css';

function listItems(items) {
  return (
    <ul className="list-group list-group-flush">
      {items.map((item, key) => {
        return (
          <li key={key} className="list-group-item">
            {item.desc} {item.price} €
          </li>
        );
      })}
    </ul>
  );
}

export const ConfigSummary = (props) => {
  const state = useSelector((state) => state);
  const selected = state.config;
  return (
    <div className="config-summary">
      <ol>
        <li>version {listItems(selected.version)}</li>
        <li>color {listItems(selected.color)}</li>
        <li>rims {listItems(selected.rims)}</li>
        <li>upholstery {listItems(selected.upholstery)}</li>
        <li>equipment {listItems(selected.equipment)}</li>
        <li>accessories : {listItems(selected.accessories)}</li>
      </ol>
      {props.children}
    </div>
  );
};
