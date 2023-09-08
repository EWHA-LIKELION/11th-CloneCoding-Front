import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import Banner from "../components/Banner";
import ItemBox from "../components/ItemBox";

const MainPage = () => {
  return (
    <Wrapper>
      <TopBar />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
