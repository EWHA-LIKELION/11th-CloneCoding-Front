import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import productData from "../_mock/ProductData";

const MainPage = () => {
    return (
        <>
            <Wrapper>
                <Header />
                <Banner />
                <div className="mainTitle">중고거래 인기매물</div>
                <Container>
                    {/* {productData.map((product) => (
                        <ProductCard id={product.id} productData={product} />
                    ))} */}
                    <ProductCard />
                </Container>
            </Wrapper>
        </>
    );
};

export default MainPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .mainTitle {
        position: relative;
        top: 440px;
        font-size: 32px;
        color: #212529;
        font-weight: 600;
    }
`;
const Container = styled.div`
    position: relative;
    top: 480px;
    width: 757px;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
`;
