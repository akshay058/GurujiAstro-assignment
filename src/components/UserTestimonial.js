import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/UserTestimonial.css";
import { userData } from "../data";
// import imgGirl from "./images/defaultImage.jpg";
// import imgBoy from "./images/defaultimage2.jpg";

export default function UserTestimonial() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const handleErrorImage = (data) => {
  //   setDefaultImage((prev) => ({
  //     ...prev,
  //     [data.target.alt]: data.target.alt,
  //     linkDefault: imgGirl,
  //   }));
  // };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>User Testimonial</h1>
      <Slider {...settings}>
        {userData.map((item) => (
          <div className="card d-flex flex-column">
            <div className="card-top">
              <img
                src={item.linkImg}
                //  defaultImage[item.name] !== item.name
                //     ? defaultImage.linkDefault
                //     : item.linkImg
                alt={item.name}
                // onError={handleErrorImage}
              />
            </div>
            <div className="card-bottom">
              <h4>
                <b>{item.name}</b>
              </h4>
              <h5 style={{ textAlign: "justify" }}>{item.review}</h5>
              <span className="category">{item.category}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
