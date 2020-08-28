import React from 'react';
import { useSelector } from 'react-redux';
import configMachine from '../machines/Configurator';
import { Link } from 'react-router-dom';
import catalog from '../config/catalog';
import {ConfigSummary, NextButton} from './';

function listItems(catalog, event) {
  return catalog.map((item, key) => {
    return (
      <NextButton
        key={key}
        onClick={() => {
          console.log(item);
          configMachine.send(event, item);
        }}
      >
        {item.desc} {item.price} €
      </NextButton>
    );
  });
}

export const Version = (props) => {
  return <Link to="/color">{listItems(catalog.versions, 'select')}</Link>;
};

export const Color = (props) => {
  return <Link to="/rims">{listItems(catalog.colors.all, 'next')}</Link>;
};

export const Rims = (props) => {
  const version = useSelector((state) => state.config.version[0]);
  console.log('version', version);
  return (
    <Link to="/upholstery">
      {listItems(catalog.rims.all, 'next')}
      {catalog.rims[version?.name]
        ? listItems(catalog.rims[version.name], 'next')
        : null}
    </Link>
  );
};
export const Upholstery = (props) => {
  const version = useSelector((state) => state.config.version[0]);
  return (
    <Link to="/equipment">
      {listItems(catalog.upholsteries.all, 'next')}
      {catalog.upholsteries[version?.name]
        ? listItems(catalog.upholsteries[version.name], 'next')
        : null}
    </Link>
  );
};
export const Equipment = (props) => {
  return (
    // <Link to="/rims">
    <>
      {catalog.equipments.map((category, key) => {
        console.log('category', category);
        return [
          <h4 key={key}>{category.desc}</h4>,
          listItems(category.items.all, 'next'),
        ];
      })}
    </>
    // </Link>
  );
};
export const Accessories = (props) => {
  return (
    <>
      {catalog.accessories.map((category, key) => {
        console.log('category', category);
        return [
          <h4 key={key}>{category.desc}</h4>,
          listItems(category.items.all, 'next'),
        ];
      })}
    </>
  );
};
export const Summary = (props) => {
  return (
    <ConfigSummary />
  );
};
