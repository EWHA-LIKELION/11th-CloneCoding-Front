import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//components
import TopBar from "../components/TopBar";
import DetailContent from "../components/DetailContent";

//images
import cover from "../images/coverimg.png";

//data
import { data } from "../_mock/mock_data";

const MainPage = () => {
  const [datalist, setDatalist] = useState(data);

  // 더보기 데이터
  const initialData = data.slice(0, 12);

  const [visibleData, setVisibleData] = useState(initialData);
  const [remainingData, setRemainingData] = useState(data.slice(12));

  // "인기매물 더보기" 버튼 클릭 시 추가 데이터
  const handleLoadMore = () => {
    setVisibleData([...visibleData, ...remainingData]);
    setRemainingData([]);
    setLoadMoreVisible(false);
  };

  // "인기매물 더보기" 버튼 on off
  const [loadMoreVisible, setLoadMoreVisible] = useState(
    remainingData.length > 0
  );

  return (
    <>
      <TopBar />
      <Container>
        <Cover>
          <CoverContent>
            <Big>
              믿을 만한 <br /> 이웃 간 중고거래
            </Big>
            <Small>
              동네 주민들과 가깝고 따뜻한 거래를 <br /> 지금 경험해보세요.
            </Small>
            <CoverImg src={cover} />
          </CoverContent>
        </Cover>
        <Content>
          <Text>중고거래 인기매물</Text>
          <ArticleList>
            {visibleData.map((item, index) => (
              <DetailContent key={index} item={item} />
            ))}
          </ArticleList>
          {loadMoreVisible && (
            <LoadMoreButton onClick={handleLoadMore}>
              인기매물 더보기
            </LoadMoreButton>
          )}
        </Content>
      </Container>
    </>
  );
};

export default MainPage;

//전체 styled

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 64px;
`;

const Cover = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff1aa;
  width: 100%;

  height: 315px;
  padding: 0 16px 0 16px;
`;

const CoverContent = styled.div`
  position: relative;
  height: 100%;
  box-sizing: border-box;

  padding-top: 50px;
  width: 768px;
  margin: 0 auto;
`;

const CoverImg = styled.img`
  position: absolute;
  display: flex;
  bottom: 0;
  right: 0;
  height: 315px;
  width: 416px;

  z-index: 5;
`;

const Big = styled.div`
  position: relative;
  z-index: 10;
  line-height: 1.5;
  font-size: 33px;
  letter-spacing: -0.32px;
  font-weight: 700;
`;

const Small = styled.div`
  position: relative;
  z-index: 10;
  line-height: 1.32;
  font-size: 18px;
  letter-spacing: -0.18px;
  margin-top: 16px;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 64px;
`;

const Text = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const ArticleList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  justify-content: center;
  margin: 40px auto;
`;

const LoadMoreButton = styled.div`
  cursor: pointer;
`;
