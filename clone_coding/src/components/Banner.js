import React from "react";
import { styled } from "styled-components";

import yellow from "../images/yellow.webp";

const Banner = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <span id="first">믿을만한</span>
        <span id="first">이웃 간 중고거래</span>
        <span id="subtitle">
          동네 주민들과 가깝고 따뜻한 거래를 <br /> 지금 경험해보세요.
        </span>
      </TitleWrapper>
      <img src={yellow} />
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  margin-top: 5px;
  height: 300px;
  background-color: #fff1aa;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  img {
    margin-left: 30px;
    height: 300px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  #first {
    color: #212529;
    font-size: 30px;
    font-weight: 650;
  }
  #subtitle {
    color: #212529;
    padding-top: 8px;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
  }
`;
