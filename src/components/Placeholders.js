import React from 'react';
import { useSelector } from 'react-redux';
import { useConfigMachineEmit } from '../machines';
import catalog from '../config/catalog';
import { ConfigSummary, NextButton } from './';

export const ItemsList = (props) => {
  const emit = useConfigMachineEmit();
  return props.list.map((item, key) => {
    return (
      <NextButton
        key={key}
        className="option-button"
        onClick={() => {
          console.log(item);
          emit(props.event, item);
        }}
      >
        {item.desc} {item.price} €
      </NextButton>
    );
  });
};
//------------------------------------------------------------------------------
export const Version = (props) => {
  // return <>{listItems(catalog.versions, 'select')}</>;
  return <ItemsList list={catalog.versions} event="select" />;
};
//------------------------------------------------------------------------------
export const Color = (props) => {
  // return <>{listItems(catalog.colors.all, 'select')}</>;
  return <ItemsList list={catalog.colors.all} event="select" />;
};
//------------------------------------------------------------------------------
export const Rims = (props) => {
  const version = useSelector((state) => state.config.version[0]);
  return (
    // <>
    //   {listItems(catalog.rims.all, 'select')}
    //   {catalog.rims[version?.name]
    //     ? listItems(catalog.rims[version.name], 'select')
    //     : null}
    // </>
    <>
      <ItemsList list={catalog.rims.all} event="select" />;
      {catalog.rims[version?.name] ? (
        <ItemsList list={catalog.rims[version.name]} event="select" />
      ) : null}
    </>
  );
};
//------------------------------------------------------------------------------
export const Upholstery = (props) => {
  const version = useSelector((state) => state.config.version[0]);
  return (
    // <>
    //   {listItems(catalog.upholsteries.all, 'select')}
    //   {catalog.upholsteries[version?.name]
    //     ? listItems(catalog.upholsteries[version.name], 'select')
    //     : null}
    // </>
    <>
      <ItemsList list={catalog.upholsteries.all} event="select" />;
      {catalog.upholsteries[version?.name] ? (
        <ItemsList list={catalog.upholsteries[version.name]} event="select" />
      ) : null}
    </>
  );
};
//------------------------------------------------------------------------------
export const Equipment = (props) => {
  return (
    <>
      {catalog.equipments.map((category, key) => {
        return [
          <span key={key} className="label">
            {category.desc}
          </span>,
          // listItems(category.items.all, 'add'),
          <ItemsList key={key + 'list'} list={category.items.all} event="add" />,
        ];
      })}
    </>
  );
};
//------------------------------------------------------------------------------
export const Accessories = (props) => {
  return (
    <>
      {catalog.accessories.map((category, key) => {
        return [
          <span key={key} className="label">
            {category.desc}
          </span>,
          // listItems(category.items.all, 'add'),
          <ItemsList key={key + 'list'} list={category.items.all} event="add" />,
        ];
      })}
    </>
  );
};
//------------------------------------------------------------------------------
export const Summary = (props) => {
  return <ConfigSummary />;
};
