import React from "react";
import styled from "styled-components";

import ProductCard2 from "./ProductCard2";
import productData from "../_mock/productData";

const PopularProduct = () => {
    return (
        <>
            <Wrapper>
                <PopularTitle>
                    <div className="title">당근 인기중고</div>
                    <div className="more">더 구경하기</div>
                </PopularTitle>
                <CardContainer>
                    {productData.map((product) => (
                        <ProductCard2 id={product.id} productData={product} />
                    ))}
                </CardContainer>
            </Wrapper>
        </>
    );
};
export default PopularProduct;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PopularTitle = styled.div`
    width: 677px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 20px;
    margin-bottom: 30px;
    .title {
        font-size: 18px;
        font-weight: 600;
    }
    .more {
        font-size: 15px;
        color: #ff8a3d;
    }
`;
const CardContainer = styled.div`
    position: relative;
    width: 677px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
`;
