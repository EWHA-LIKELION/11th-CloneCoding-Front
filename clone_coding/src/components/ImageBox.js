import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";

import before from "../assets/icons/before.svg";
import next from "../assets/icons/next.svg";

const ImageBox = ({ id, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  //이미지 index가 시작과 끝일 때 이미지 이동
  useEffect(() => {
    if (currentIndex === -1) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        (images.length - 1) * 660
      }px)`;
      setCurrentIndex(images.length - 1);
    } else if (currentIndex === images.length) {
      setCurrentIndex(0);
      slideRef.current.style.transition = "all 0.5 ease-in-out";
      slideRef.current.style.transform = `translateX(0px)`;
    }
  }, [currentIndex]);

  //이전 이미지로 전환
  const beforeClick = () => {
    if (currentIndex === -1) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        currentIndex * 660 - 660
      }px)`;
    }
  };

  //다음 이미지로 전환
  const nextClick = () => {
    if (currentIndex === images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        660 * (currentIndex + 1)
      }px)`;
    }
  };

  //이미지가 1개일 경우 화살표 띄우지 않도록 조건 지정
  const hideBtn = images.length === 1;

  console.log(images);

  return (
    <Wrapper>
      {!hideBtn && (
        <BeforeBtn onClick={beforeClick}>
          <img src={before} />
        </BeforeBtn>
      )}
      <ImageWrapper>
        <ImageSlider ref={slideRef}>
          {images.map((image) => (
            <div>
              <img src={image} />
            </div>
          ))}
        </ImageSlider>
      </ImageWrapper>
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
  overflow: hidden;
`;

const BeforeBtn = styled.div`
  height: 25px;
  margin-right: 15px;
  cursor: pointer;
  z-index: 50;
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 660px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
`;

const ImageSlider = styled.div`
  display: flex;
  width: 660px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  z-index: 20;
  div {
    display: flex;
  }
  img {
    width: 660px;
    height: 500px;
    border-radius: 10px;
    object-fit: cover;
  }
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
  z-index: 50;
`;
