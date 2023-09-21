import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import Product from "../components/Product";
import Banner from "../components/Banner";

import { productData } from "../mock/productData";

const Main = () => {
  return (
    <Wrapper>
      <TopBar />
      <Banner />
      <TextWrapper>중고거래 인기매물</TextWrapper>
      <Center>
        <ProductWrapper>
          {productData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductWrapper>
      </Center>
    </Wrapper>
  );
};

export default Main;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const TextWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 31px;
  font-weight: 600;
  color: #212529;
`;
const ProductWrapper = styled.div`
  width: 705px;
  margin-top: 42px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Center = styled.div`
  display: flex;
  align-items: center; /* 가운데 정렬을 위해 추가 */
  justify-content: center;
`;
