import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { productData } from "../mock/productData";

const HotItem = () => {
  return (
    <Wrapper>
      <Hottem>
        <div className="hot">당근 인기중고</div>
        <div className="more">더 구경하기</div>
      </Hottem>

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
export default HotItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hottem = styled.div`
  width: 660px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .hot {
    font-size: 18px;
    font-weight: 600;
  }
  .more {
    font-size: 15px;
    color: #ff8a3d;
  }
`;

const ProductWrapper = styled.div`
  width: 680px;
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
