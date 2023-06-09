import React from "react";
import ImageSlider from "./ImageSlider";

const CarouselNew = () => {
  const slides = [
    { url: "/assets/images/carousel/img_carousel.png", title: "banner1" },
    { url: "/assets/images/carousel/carousel2.svg", title: "banner2" },
    { url: "/assets/images/carousel/carousel3.svg", title: "banner3" },
  ];

  const containerStyles = {
    width: "100%",
    height: "280px",
    margin: "20px",
  };

  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default CarouselNew;