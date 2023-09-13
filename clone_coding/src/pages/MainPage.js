import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import ProductBox from "../components/ProductBox";
import BannerIcon from "../assets/icons/BannerIcon.png";

const MainPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <Banner>
        <BannerText>
          <p id="text-up">
            믿을만한 <br /> 이웃 간 중고거래
          </p>
          <p id="text-down">
            동네 주민들과 가깝고 따뜻한 거래를 <br /> 지금 경험해보세요.
          </p>
        </BannerText>
        <img src={BannerIcon} />
      </Banner>
      <Title>중고거래 인기매물</Title>
      <Container>
        <ProductBox />
      </Container>
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
  height: 395px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff1aa;
  gap: 70px;

  img {
    width: 515px;
    height: 395px;
  }
`;
const BannerText = styled.div`
  color: #212529;
  margin-top: -80px;

  #text-up {
    font-size: 43px;
    font-weight: 700;
  }

  #text-down {
    font-size: 22px;
    margin-top: -20px;
  }
`;
const Title = styled.div`
  font-size: 37px;
  font-weight: 700;
  margin-top: 70px;
  color: #212529;
`;
const Container = styled.div`
  width: 50%;
  margin-top: 20px;
`;
