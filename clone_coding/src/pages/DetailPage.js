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
        <p id="title">{productInfo.title}</p>
        <div>
          <span>{productInfo.category} ·</span>
          <span>{productInfo.time}</span>
        </div>
        <p id="price">{productInfo.price}원</p>
        <p id="explain">{productInfo.explain}</p>
        <div>
          <span>관심 {productInfo.likes} ·</span>
          <span>채팅 {productInfo.chats} ·</span>
          <span>조회 {productInfo.views}</span>
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
        <span>당근 인기중고</span>
        <span>더 구경하기</span>
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
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  #username {
    font-size: 22px;
    font-weight: 700;
  }

  #address {
    margin-top: -15px;
  }
`;

const MannerTemp = styled.div``;

const ContentBottom = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  #title {
    font-size: 25px;
    font-weight: 700;
  }

  #price {
    font-size: 25px;
    font-weight: 700;
  }

  #explain {
    font-size: 23px;
  }
`;
const HotItems = styled.div`
  width: 45%;
`;
