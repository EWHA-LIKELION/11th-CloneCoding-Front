import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";

const DetailPage = () => {
  return (
    <Wrapper>
      <TopBar />
    </Wrapper>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
