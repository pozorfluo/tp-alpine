import React from 'react';
import { useSelector } from 'react-redux';
import './ConfigSummary.css';

function listItems(items) {
  return (
    <ul>
      {items.map((item, key) => {
        return (
          <li key={key}>
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
    <>
    <p>step : {state.step ?? '...'}</p>
    {/* <p>redirect : {state.redirect ?? '...'}</p> */}
    <hr />
    <ol>
      <li>version {listItems(selected.version)}</li>
      <li>color {listItems(selected.color)}</li>
      <li>rims {listItems(selected.rims)}</li>
      <li>upholstery {listItems(selected.upholstery)}</li>
      <li>equipment {listItems(selected.equipment)}</li>
      <li>accessories : {listItems(selected.accessories)}</li>
    </ol>
    {/* <div className="configStatus d-flex bd-d-flex align-items-center flex-column bd-highlight mb-3">
      <div className="selectionVersion">
        Version
        <p className="versionPrice">S</p>
        <p className="versionPriceValue">67 900 €</p>
        <a href="#">changer</a>
      </div>

      <div className="selectionColor">
        Couleur
        <p className="colorPrice">Blanc Glacier</p>
        <p className="colorPriceValue">0 €</p>
        <a href="#">changer</a>
      </div>

      <div className="selectionRims">
        Jantes et roues
        <p className="rimsPrice">Jantes GT Race 18&lsquo&lsquo Noir Mat.</p>
        <p className="rimsPriceValue">0 €</p>
        <a href="#">changer</a>
      </div>

      <div className="selectionSaddlery">
        Sellerie
        <p className="SaddleryPrice">Cuir / Dinamica avec surpiqûres Orange</p>
        <p className="SaddleryPriceValue">inclus</p>
        <a href="#">changer</a>
      </div>

      <div className="selectionEquipement">
        Equipements
        <p className="EquipementPrice">Aucun item sélectionné</p>
        <p className="EquipementPriceValue">0 €</p>
        <a href="#">choisir</a>
      </div>

      <div className="selectionAccessories">
        Accessoires
        <p className="AccessoriesPrice">Aucun item sélectionné</p>
        <p className="AccessoriesPriceValue">0 €</p>
        <a href="#">choisir</a>
      </div>

      <div className="selectionSeriesEquipement">
        Equipements de série
        <a href="#">afficher</a>
      </div>

      <div className="selectiontechnicalCaracteristic">
        Caractéristiques techniques
        <a href="#">afficher</a>
      </div>
    </div> */}
    </>
  );
};
