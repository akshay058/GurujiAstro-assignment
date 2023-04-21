import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/UserTestimonial.css";
import { userData } from "../data";
import sun from "./images/Vector.png";
import star from "./images/star.png";
// import imgGirl from "./images/defaultImage.jpg";
// import imgBoy from "./images/defaultimage2.jpg";

export default function UserTestimonial() {
  // const [defaultImage, setDefaultImage] = useState({});
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

  return (
    <div className="app">
      <div className=" my-1 d-flex flex-column justify-content-center align-items-center">
        <img
          src={sun} alt="sun"
          style={{ height: "7rem", width: "7rem", marginTop: "2rem" }}
        ></img>
      </div>
      <div className=" d-flex flex-row justify-content-center align-items-center">
        <img
          src={star} alt="star"
          className="mx-3"
          style={{ height: "2rem", width: "2rem" }}
        ></img>
        <h1
          className="my-5"
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontFamily: "sansation",
            color: "#D97122",
          }}
        >
          User Testimonial
        </h1>
        <img
          src={star} alt="star"
          className="mx-3"
          style={{ height: "2rem", width: "2rem" }}
        ></img>
      </div>
      <Slider {...settings}>
        {userData.map((item) => (
          <div className="card d-flex flex-column" key={item.id}>
            <div className="card-top">
              <img src={item.linkImg} alt={item.name} />
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
