import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import ProductBox from "../components/ProductBox";
import BannerIcon from "../assets/BannerIcon.png";

const MainPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <Banner>
        <BannerText>
          <p id="text-up">믿을만한 이웃 간 중고거래</p>
          <p id="text-down">
            동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
          </p>
        </BannerText>
        <img src={BannerIcon} />
      </Banner>
      <Title>중고거래 인기매물</Title>
      <Content>
        <ProductBox />
      </Content>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Banner = styled.div`
  width: 100%;
  height: 315px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff1aa;

  img {
    width: 416px;
    height: 315px;
  }
`;
const BannerText = styled.div`
  color: #212529;

  #text-up {
    font-size: 40px;
    font-weight: 700;
  }

  #text-down {
    font-size: 27px;
  }
`;
const Title = styled.div`
  font-size: 37px;
  font-weight: 700;
  color: #212529;
`;
const Content = styled.div``;
