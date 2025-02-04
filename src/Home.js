//Slider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MySlider() {
  const images = [
    `${process.env.PUBLIC_URL}/images/pexels grey4.jpg`, 
    `${process.env.PUBLIC_URL}/images/pexels grey.jpg`,
    `${process.env.PUBLIC_URL}/images/pexels grey3.jpg`
  ];
  

  // Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
  };

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ position: "relative", width: "100%" }}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
                filter: "brightness(60%)", 
                transition: "filter 0.3s ease-in-out", 
              }}
            />
          </div>
        ))}
      </Slider>

   
      <div
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    textAlign: "center",
    textShadow: "0px 0px 6px rgba(255, 165, 0, 1)", 
    fontSize: "2.7rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px", 
  }}
>
  ★ Light Your Life ★ <br />
  With Our Premium Candles
</div>


       

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default MySlider;







