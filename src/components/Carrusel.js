import { Carousel } from 'react-bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';


function CarouselFade() {
  return (
    
    <Carousel className='carousel' fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/banner1.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <NavLink to='/productos'>  <img
            className="d-block w-100"
            src="./img/banner2.png"
            alt="Second slide"
          />
        </NavLink>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/banner3.png"
          alt="Third slide"
        />

        
        
      </Carousel.Item>
    </Carousel>
    
  );
}

export default CarouselFade;