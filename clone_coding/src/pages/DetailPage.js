import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import ImageBox from "../components/ImageBox";

const DetailPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <ImageBox />
    </Wrapper>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
