import React from 'react';
import './OptionMenu.css';

export const OptionMenu = (props) => {
  return (
    <div className="buttonMenuOptionContainer d-flex justify-content-start">
      <button type="button" className="btn btn-outline-primary">
        <div className="buttonContent">
          <img
            src="https://cdn.group.renault.com/alp/multimedia_card/DESIGN.jpg.ximg.small.jpg/1540833268589.jpg"
            alt="logoTest"
          />
        </div>
        <span className="optionsNumber">1</span>
        <div>
          <p>Design</p>
        </div>
      </button>

      <button type="button" className="btn btn-outline-primary">
        <div className="buttonContent">
          <img
            src="https://cdn.group.renault.com/alp/multimedia_card/MEDIA.jpg.ximg.small.jpg/1528965222836.jpg"
            alt="logoTest"
          />
        </div>
        <span className="optionsNumber">2</span>
        <div>
          <p>Media et navigation</p>
        </div>
      </button>
    </div>
  );
};
