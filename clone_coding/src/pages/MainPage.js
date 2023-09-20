import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";

const MainPage = () => {
    return (
        <>
            <Wrapper>
                <Header />
                <Banner />
                <div className="mainTitle">중고거래 인기매물</div>
                <ProductCard />
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
