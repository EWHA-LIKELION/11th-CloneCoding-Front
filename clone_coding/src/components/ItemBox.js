import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import testImg from "../assets/images/test.jpg";

const ItemBox = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ItemImage src={testImg} />
    </Wrapper>
  );
};

export default ItemBox;

const Wrapper = styled.div`
  width: 223px;
  height: 330px;
`;

const ItemImage = styled.img`
  width: 223px;
  height: 223px;
  border-radius: 10px;
  object-fit: cover;
`;
