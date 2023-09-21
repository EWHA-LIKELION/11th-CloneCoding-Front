import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//components

const DetailContent = ({ item }) => {
  const navigate = useNavigate();
  if (!item) {
    return null; // item이 없을 경우 아무것도 렌더링하지 않음
  }

  const handleDetailPage = (post_id) => {
    navigate(`/articles/${post_id}`);
  };

  return (
    <Container onClick={() => handleDetailPage(item.post_id)}>
      {item.isList ? <Cover src={item.cover[0]} /> : <Cover src={item.cover} />}
      {/* <Cover src={item.cover} /> */}
      <Text>
        <Title>{item.title}</Title>
        <Price>{item.price}원</Price>
        <Place>{item.place}</Place>
        <ReactionDiv>
          <Attention>
            관심 {item.attention} {"  .  "}채팅 {item.chatting}
          </Attention>
        </ReactionDiv>
      </Text>
    </Container>
  );
};

export default DetailContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 240px;

  margin-bottom: 36px;
  cursor: pointer;
`;

const Font = styled.div`
  color: #fff;
  font-family: "Pretendard-Regular";
  font-style: normal;
  line-height: 100%; /* 15px */
  letter-spacing: -0.3px;
`;

const Cover = styled.img`
  border-radius: 12px;
  border: 1px solid transparent;

  width: 222px;
  height: 222px;
  overflow: clip;
`;
const Text = styled.div`
  margin-top: 12px;
`;

const Title = styled.div`
  font-size: 14px;
  letter-spacing: -0.02px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 2px;
  line-height: 1.5;
  font-weight: normal;
`;

const Price = styled.div`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 4px;
`;

const Place = styled.div`
  font-size: 12px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
`;

const ReactionDiv = styled.div`
  display: flex;
  color: #868e96;
  font-size: 12px;
`;

const Attention = styled.div``;

const Chatting = styled.div``;
