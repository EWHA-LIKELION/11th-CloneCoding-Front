import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import Banner from "../components/Banner";
import ItemBox from "../components/ItemBox";

const MainPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <Banner />
      <ItemList>
        <span>중고거래 인기매물</span>
        <List></List>
      </ItemList>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const ItemList = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-family: pretendard;
    font-size: 34px;
    font-weight: 600;
    color: #212529;
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
