// Carousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

const TestimonialCarousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container bg-white w-full">
      <Slider {...settings}> 
        {/* Your carousel items go here */}
        <div className="carousel-item"><Card image={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"} title={"Rashmi"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?"}/></div>
        <div className="carousel-item"><Card image={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"} title={"Harish"}  content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?"}/></div>
        <div className="carousel-item"><Card image={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"} title={"gautam"}  content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?"}/></div>
        <div className="carousel-item"><Card image={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"} title={"Rishi"}  content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?"}/></div>
        <div className="carousel-item"><Card image={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"} title={"nasir"}  content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?"}/></div>
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
