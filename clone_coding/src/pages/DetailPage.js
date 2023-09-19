import React from "react";
import TopBar from "../components/TopBar";
import { useParams } from "react-router-dom";
import { PhotoMock } from "../mockdata/PhotoMock";
import { ProfileMock } from "../mockdata/ProfileMock";
import { ContentMock } from "../mockdata/ContentMock";
import styled from "styled-components";

const DetailPage = () => {
  const { id } = useParams();

  // id를 기반으로 해당 상품의 정보를 가져옵니다.
  const productInfo = ContentMock.find(
    (product) => product.id === parseInt(id)
  );

  if (!productInfo) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

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

  const color = getTempColor(productInfo.temp);

  return (
    <Wrapper>
      <TopBar />
      <ProductImg>
        <img src={PhotoMock[parseInt(id)]} alt={`Image ${id}`} />
      </ProductImg>
      <ContentTop>
        <Profile>
          <img src={ProfileMock[parseInt(id)]} alt={`Image ${id}`} />
          <div>
            <p id="username">{productInfo.username}</p>
            <p id="address">{productInfo.address}</p>
          </div>
        </Profile>
        <MannerTemp>
          <div>
            <p>{productInfo.temp}</p>
            <div
              style={{
                backgroundColor: color,
                width: "24px",
                height: "24px",
                borderRadius: "100%",
              }}
            />
            <p>매너온도</p>
          </div>
        </MannerTemp>
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
      <HotItems>
        <span id="left">당근 인기중고</span>
        <span id="right">더 구경하기</span>
      </HotItems>
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
  margin-bottom: 16px;

  img {
    width: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
`;

const ContentTop = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
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

const MannerTemp = styled.div`
  font-size: 12px;
  color: #868e96;
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
const HotItems = styled.div`
  width: 45%;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;

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
