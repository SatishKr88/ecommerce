import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../images/image1.webp";
import image2 from "../images/image2.webp";
import image3 from "../images/image3.webp";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute left-2  top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-200"
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronLeft className="text-black text-xl" />
    </div>
  );
};


const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-200"
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronRight className="text-black text-xl" />
    </div>
  );
};

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full max-w-7xl mx-auto relative top-19">
      <Slider {...settings}>
        <div>
          <img
            src={image1}
            alt="Image 1"
            className="w-full h-auto object-cover "
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Image 2"
            className="w-full h-auto object-cover "
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Image 3"
            className="w-full h-auto object-cover "
          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
