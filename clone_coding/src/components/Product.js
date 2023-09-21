import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
//date
import { productData } from "../mock/productData";

const Product = ({ id, product }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate("/detail", { state: { productData: productData } });
  };

  return (
    <Wrapper onClick={goToDetail}>
      <ImageWrapper>
        <img src={product.image[0]} width={200} />
      </ImageWrapper>
      <InfoWrapper>
        <span id="title">{product.title}</span>
        <span id="price">{product.price}</span>
        <span id="place">{product.place}</span>
        <span id="view">{product.like}</span>
      </InfoWrapper>
    </Wrapper>
  );
};
export default Product;
const Wrapper = styled.div`
  width: 220px;
  height: 330px;
`;
const ImageWrapper = styled.div`
  img {
    border-radius: 10px;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: -apple-system;
  #title {
    font-size: 16px;
    font-weight: normal;
    color: #212124;
    margin-bottom: 6px;
  }
  #price {
    font-size: 14px;
    font-weight: 700;
    color: #212124;
    margin-bottom: 6px;
  }
  #place {
    font-size: 12px;
    font-weight: 400;
    color: #212124;
    margin-bottom: 5px;
  }
  #view {
    font-size: 12px;
    font-weight: 400;
    color: #868e96;
  }
`;
