import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import testImg from "../assets/images/test.jpg";

const ItemBox = ({ id, itemData }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate("/detail");
  };

  return (
    <Wrapper onClick={goDetail}>
      <ItemImage src={itemData.images[0]} />
      <ItemInfo>
        <span id="title">{itemData.title}</span>
        <span id="price">{itemData.price}원</span>
        <span id="place">{itemData.place}</span>
        <span id="like">
          관심 {itemData.likes} · 채팅 {itemData.chats}
        </span>
      </ItemInfo>
    </Wrapper>
  );
};

export default ItemBox;

const Wrapper = styled.div`
  width: 223px;
  height: 330px;
  margin-bottom: 50px;
`;

const ItemImage = styled.img`
  width: 223px;
  height: 223px;
  border-radius: 10px;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  #title {
    font-family: pretendard;
    font-size: 16px;
    font-weight: 300;
    color: #212124;
    margin-bottom: 6px;
  }
  #price {
    font-family: pretendard;
    font-size: 16px;
    font-weight: 700;
    color: #212124;
    margin-bottom: 6px;
  }
  #place {
    font-family: pretendard;
    font-size: 14px;
    font-weight: 300;
    color: #212124;
    margin-bottom: 8px;
  }
  #like {
    font-family: pretendard;
    font-size: 13px;
    font-weight: 300;
    color: #868e96;
  }
`;
