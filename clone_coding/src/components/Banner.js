import React from "react";
import { styled } from "styled-components";

import banner from "../assets/icons/banner.webp";

const Banner = () => {
  return (
    <Wrapper>
      <TextBox>
        <span id="title">믿을만한</span>
        <span id="title">이웃 간 중고거래</span>
        <span id="subtitle">
          동네 주민들과 가깝고 따뜻한 거래를 <br /> 지금 경험해보세요.
        </span>
      </TextBox>
      <img src={banner} />
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  height: 315px;
  margin-top: 50px;
  background-color: #fff1aa;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  img {
    height: 315px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  #title {
    font-family: pretendard;
    font-size: 34px;
    font-weight: 700;
    color: #212529;
  }
  #subtitle {
    padding-top: 8px;
    font-family: pretendard;
    font-size: 18px;
    font-weight: 300;
    line-height: 140%;
    color: #212529;
  }
`;
