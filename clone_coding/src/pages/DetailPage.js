import React, { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import { useParams } from "react-router-dom";
import { PhotoMock } from "../mockdata/PhotoMock";
import { ProfileMock } from "../mockdata/ProfileMock";
import { ContentMock } from "../mockdata/ContentMock";
import HotItem from "../components/HotItem";
import styled from "styled-components";

import GoLeft from "../assets/icons/GoLeft.png";
import GoRight from "../assets/icons/GoRight.png";

const DetailPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();

  // 스크롤 맨 위로
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [id]);

  const productInfo = ContentMock.find(
    (product) => product.id === parseInt(id)
  );

  if (!productInfo) {
    return <div>상품을 찾을 수 없습니다</div>;
  }

  const goNext = () => {
    if (currentIndex < PhotoMock[parseInt(id)].moreImg.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentImg =
    currentIndex === 0
      ? PhotoMock[parseInt(id)].mainImg
      : PhotoMock[parseInt(id)].moreImg[currentIndex - 1];

  // 매너 온도에 따른 색상 변화
  function getTempColor(temp) {
    if (temp >= 0 && temp <= 36.2) {
      return "#0d3a65";
    } else if (temp >= 36.3 && temp <= 37.5) {
      return "#1561a9";
    } else if (temp >= 37.6 && temp <= 42) {
      return "#319e45";
    } else if (temp >= 42 && temp <= 52) {
      return "#df9100";
    } else {
      return "#de5d06";
    }
  }

  const TempColor = getTempColor(productInfo.temp);

  return (
    <Wrapper>
      <TopBar />
      <ProductImg style={{ gap: "15px" }}>
        <img src={GoLeft} className="arrow" onClick={goBack} />
        <img src={currentImg} alt={`Image ${id}`} />
        <img src={GoRight} className="arrow" onClick={goNext} />
      </ProductImg>
      <ContentTop>
        <Profile>
          <img src={ProfileMock[parseInt(id)]} alt={`Image ${id}`} />
          <div>
            <p id="username">{productInfo.username}</p>
            <p id="address">{productInfo.address}</p>
          </div>
        </Profile>
        <Manner>
          <Temp>
            <div>
              <p
                style={{
                  color: TempColor,
                  fontSize: "16px",
                  fontWeight: "600",
                  textAlign: "right",
                  marginBottom: "7px",
                }}
              >
                {productInfo.temp} °C
              </p>
              <div
                style={{
                  width: "100px",
                  height: "4px",
                  backgroundColor: "#e9ecef",
                  borderRadius: "5px",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  width: `${((productInfo.temp - 0) / (100 - 0)) * 100}%`,
                  height: "4px",
                  backgroundColor: TempColor,
                  borderRadius: "5px",
                  position: "relative",
                  zIndex: 2,
                  top: "-4px",
                }}
              />
            </div>
            <div
              style={{
                width: "24px",
                height: "24px",
                border: `2px solid ${TempColor}`,
                borderRadius: "100%",
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    width: "3px",
                    height: "4px",
                    backgroundColor: `${TempColor}`,
                    borderRadius: "50%",
                    marginTop: "8px",
                  }}
                />
                <div
                  style={{
                    width: "3px",
                    height: "4px",
                    backgroundColor: `${TempColor}`,
                    borderRadius: "50%",
                    marginTop: "8px",
                  }}
                />
              </div>
              <div
                style={{
                  width: "8px",
                  marginTop: "4px",
                  borderBottom: `2px solid ${TempColor}`,
                }}
              />
            </div>
          </Temp>
          <p style={{ textAlign: "right" }}>매너온도</p>
        </Manner>
      </ContentTop>
      <div
        style={{
          width: "45%",
          height: "5%",
          borderBottom: "1px solid lightGray",
        }}
      ></div>
      <ContentBottom>
        <p id="title" style={{ marginBottom: "4px" }}>
          {productInfo.title}
        </p>
        <div>
          <span>{productInfo.category} ·</span>
          <span style={{ marginLeft: "5px" }}>{productInfo.time}</span>
        </div>
        <p id="price" style={{ marginTop: "4px", marginBottom: "4px" }}>
          {productInfo.price}원
        </p>
        <p id="explain" style={{ marginBottom: "16px" }}>
          {productInfo.explain}
        </p>
        <div>
          <span>관심 {productInfo.likes} ·</span>
          <span style={{ marginLeft: "5px" }}>채팅 {productInfo.chats} ·</span>
          <span style={{ marginLeft: "5px" }}>조회 {productInfo.views}</span>
        </div>
      </ContentBottom>
      <div
        style={{
          width: "45%",
          height: "5%",
          borderBottom: "1px solid lightGray",
        }}
      ></div>
      <HotItemText>
        <span id="left">당근 인기중고</span>
        <span id="right">더 구경하기</span>
      </HotItemText>
      <HotItemGrid>
        <HotItem />
      </HotItemGrid>
    </Wrapper>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 30%;
  margin-top: 80px;
  margin-bottom: 4px;

  img {
    width: 100%;
    border-radius: 15px;
    object-fit: cover;
  }

  .arrow {
    width: 11px;
    height: 21px;
    cursor: pointer;
  }
`;

const ContentTop = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  #username {
    font-size: 15px;
    font-weight: 700;
    color: #212529;
  }

  #address {
    font-size: 13px;
    color: #212529;
    margin-top: -15px;
  }
`;

const Manner = styled.div`
  font-size: 12px;
  color: #868e96;
`;

const Temp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 13px;
  margin-bottom: -7px;
`;

const ContentBottom = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: 32px;

  #title {
    font-size: 20px;
    font-weight: 700;
    color: #212529;
  }

  #price {
    font-size: 18px;
    font-weight: 700;
    color: #212529;
  }

  #explain {
    font-size: 17px;
    color: #212529;
  }

  span {
    font-size: 13px;
    color: #868e96;
  }
`;
const HotItemText = styled.div`
  width: 45%;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  #left {
    font-size: 18px;
    font-weight: 600;
    color: #212529;
  }

  #right {
    font-size: 15px;
    color: #ff8a3d;
  }
`;

const HotItemGrid = styled.div``;
