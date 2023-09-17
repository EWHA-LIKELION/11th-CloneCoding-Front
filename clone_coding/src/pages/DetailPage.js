import React from "react";
import TopBar from "../components/TopBar";
import { useParams } from "react-router-dom";
import { PhotoMock } from "../mockdata/PhotoMock";
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
    <>
      <TopBar />
      <img src={PhotoMock[parseInt(id)]} alt={`Image ${id}`} />
      <Profile>
        <p>{productInfo.address}</p>
        <p>{productInfo.temp}</p>
      </Profile>
      <Content>
        <p>{productInfo.title}</p>
        <span>{productInfo.category}</span>
        <span>{productInfo.time}</span>
        <p>{productInfo.price}</p>
        <p>{productInfo.explain}</p>
        <span>{productInfo.likes}</span>
        <span>{productInfo.chats}</span>
        <span>{productInfo.views}</span>
      </Content>
    </>
  );
};

export default DetailPage;

const Profile = styled.div``;
const Content = styled.div``;
