import React, { useState } from "react";
import { styled } from "styled-components";

import before from "../assets/icons/before.svg";
import next from "../assets/icons/next.svg";

const ImageBox = ({ id, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //다음 이미지로 전환
  const nextClick = () => {};

  //이전 이미지로 전환
  const beforeClick = () => {};

  //이미지가 1개일 경우 화살표 띄우지 않도록 조건 지정
  const hideBtn = images.length === 1;

  return (
    <Wrapper>
      {!hideBtn && (
        <BeforeBtn onClick={beforeClick}>
          <img src={before} />
        </BeforeBtn>
      )}
      <ImageSlider>
        {images.map((image) => (
          <Image src={image} />
        ))}
      </ImageSlider>
      <ImageCnt></ImageCnt>
      {!hideBtn && (
        <NextBtn onClick={nextClick}>
          <img src={next} />
        </NextBtn>
      )}
    </Wrapper>
  );
};

export default ImageBox;

const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
`;

const BeforeBtn = styled.div`
  height: 25px;
  margin-right: 15px;
  cursor: pointer;
`;

const ImageSlider = styled.div`
  width: 660px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  position: relative;
  border-radius: 10px;
  width: 660px;
  height: 500px;
  float: left;
  object-fit: cover;
`;

const ImageCnt = styled.div`
  position: absolute;
  bottom: 10px;
  margin: auto;
  display: flex;
  button {
    width: 10px;
    height: 10px;
    border-radius: 20px;
    background-color: #fff;
    opacity: 0.3;
    &.active {
      opacity: 1;
    }
  }
`;

const NextBtn = styled.div`
  height: 25px;
  margin-left: 15px;
  cursor: pointer;
`;
