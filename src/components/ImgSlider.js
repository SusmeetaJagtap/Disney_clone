import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="./images/slider-badging.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="./images/slider-badging.jpg"></img>
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;
const Carousel = styled(Slider)``;
const Wrap = styled.div``;
