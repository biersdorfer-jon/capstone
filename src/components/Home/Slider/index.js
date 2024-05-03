import React, {useEffect} from 'react';
import { officers } from '../../../data/constants';
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import OfficerCard from '../OfficerCard';



const Slide = () => {
  var settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    width: '100%',
    speed: 1000,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (

    
    <Slider className='slide' {...settings}>
    {officers.map((officers) => (
                <OfficerCard key={officers.id} officers={officers} />
              ))}
  </Slider>
  
  );
};

export default Slide;