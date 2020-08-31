import React from 'react';
import './PreviewCarousel.css';
import Carousel from 'react-bootstrap/Carousel';

export const PreviewCarousel = (props) => {
  
    
  
  return (
    <Carousel>
      {props.images.forEach(element => { console.log(element);
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.images}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      });
      };
  </Carousel>
  );
};

const whiteImagesLegende = [
  "/images/modele_legende-couleur_blanc-jante_legende-1.jpg",
  "/images/modele_legende-couleur_blanc-jante_legende-2.jpg",
  "/images/modele_legende-couleur_blanc-jante_legende-3.jpg",
  "/images/modele_legende-couleur_blanc-jante_legende-4.jpg",
];
