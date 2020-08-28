import React from 'react';
import { useSelector } from 'react-redux';
import configMachine from '../machines/Configurator';
import catalog from '../config/catalog';
import { ConfigSummary, NextButton } from './';

function listItems(catalog, event) {
  return catalog.map((item, key) => {
    return (
      <NextButton
        key={key}
        className="option-button"
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
  return <>{listItems(catalog.versions, 'select')}</>;
};

export const Color = (props) => {
  return <>{listItems(catalog.colors.all, 'select')}</>;
};

export const Rims = (props) => {
  const version = useSelector((state) => state.config.version[0]);
  return (
    <>
      {listItems(catalog.rims.all, 'select')}
      {catalog.rims[version?.name]
        ? listItems(catalog.rims[version.name], 'select')
        : null}
    </>
  );
};
export const Upholstery = (props) => {
  const version = useSelector((state) => state.config.version[0]);
  return (
    <>
      {listItems(catalog.upholsteries.all, 'select')}
      {catalog.upholsteries[version?.name]
        ? listItems(catalog.upholsteries[version.name], 'select')
        : null}
    </>
  );
};
export const Equipment = (props) => {
  return (
    <>

      {catalog.equipments.map((category, key) => {
        return [
          <span key={key} className="label">
            {category.desc}
          </span>,
          listItems(category.items.all, 'add'),
        ];
      })}
    </>
  );
};
export const Accessories = (props) => {
  return (
    <>
      {catalog.accessories.map((category, key) => {
        return [
          <span key={key} className="label">
            {category.desc}
          </span>,
          listItems(category.items.all, 'add'),
        ];
      })}
    </>
  );
};
export const Summary = (props) => {
  return <ConfigSummary />;
};
