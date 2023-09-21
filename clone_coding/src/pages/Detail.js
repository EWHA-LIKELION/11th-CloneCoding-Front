import { React, useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { productData } from "../mock/productData";
//component
import TopBar from "../components/TopBar";
import ProductImgSlide from "../components/ProductImgSlide";
import Content from "../components/Content";
import HotItem from "../components/HotItem";

const Detail = () => {
  const location = useLocation();
  const productData = location.state.productData;

  const { id } = useParams();

  return (
    <Wrapper>
      <TopBar />
      <ProductImgSlide />
      <Content product={productData} />
      <HotItem />
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
