import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//images
import prevbtn from "../images/prevbtn.png";
import nextbtn from "../images/nextbtn.png";

const ImgCarousel = ({ cover }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextTo>
        <BtnImg src={nextbtn} />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <BtnImg src={prevbtn} />
      </Pre>
    ),
  };
  return (
    <>
      <ImgSlider {...settings}>
        {cover.map((image, index) => (
          <div key={index}>
            <Cover src={image} />
          </div>
        ))}
      </ImgSlider>
    </>
  );
};

export default ImgCarousel;

// 매너온도

const ImgSlider = styled(Slider)`
  position: relative;
  display: flex;
  justify-content: center;

  .slick-list {
    position: relative;
    width: 685px;
    margin: 0;
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    cursor: pointer;
  }

  .slick-prev,
  .slick-next {
    width: 19px;
    height: 28px;
    object-fit: contain;
  }

  .slick-dots li button:hover {
    outline: none;
  }

  .slick-dots li button {
    position: absolute;
    bottom: 30px;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #fff;
  }
`;

const Pre = styled.div`
  position: absolute;
  left: 0;
  z-index: 3;
  object-fit: contain;
`;

const NextTo = styled.div`
  position: absolute;
  right: 0;
  z-index: 3;
`;

const BtnImg = styled.img`
  width: 19px;
  height: 28px;
`;

const Cover = styled.img`
  position: relative;
  width: 677px;
  height: 500px;
  margin: 35px auto 0px;
  border-radius: 8px;
  overflow: hidden;
  object-fit: cover;
`;
