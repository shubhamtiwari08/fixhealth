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
        <div className="carousel-item"><Card image={"https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FRashmi_KEXRN9maT.png%3FupdatedAt%3D1686564335393&w=1920&q=75"} title={"Rashmi"} content={"Quality, pocket friendly & consistent care is what Fix Health stands for"} relief={"Fixed backpain from home"}/></div>
        <div className="carousel-item"><Card image={"https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FNasir_kCpBt8epvL.png%3FupdatedAt%3D1686564335336&w=1920&q=75"} title={"Pranjal Deep"}  content={"They worked around time zone variations to accommodate my schedule"} relief={"Sitting Job Pain eased"}/></div>
        <div className="carousel-item"><Card image={"https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FRajesh_SUeQmKzaY.png%3FupdatedAt%3D1686564335353&w=1920&q=75"} title={"Nasir kamal"}  content={"6 month with Fix Health was less than 1 month of my insurance co-pay"} relief={"Injury of 12 YEAR fixed"}/></div>
        <div className="carousel-item"><Card image={"https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F6ehbvb2tOj2sBlfqT6mKR2%2F2b45744f8b075140c934404cf60f519e%2FWhatsApp_Image_2023-07-14_at_18.59.55.jpg&w=1920&q=75"} title={"Rajesh Chainani"}  content={"Loved the personal touch of the Physio's, Doctors and care manager."} relief={"Effective post surgery rehab"}/></div>
        <div className="carousel-item"><Card image={"https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FDeep_P-vGzCQ88.png%3FupdatedAt%3D1686564335311&w=1920&q=75"} title={"Neil phenerio"}  content={"I realized treatment could be done remotely, eliminating need for in-person visits."} relief={"surgery free neck pain relief"}/></div>
      </Slider>
    </div>
  ); 
};
 
export default TestimonialCarousel;
