import React from "react";
import { styled } from "styled-components";

import testImg from "../assets/images/test.jpg";
import before from "../assets/icons/before.svg";
import next from "../assets/icons/next.svg";

const ImageBox = ({ id, images }) => {
  return (
    <Wrapper>
      <BeforeBtn>
        <img src={before} />
      </BeforeBtn>
      <Image src={images[0]} />
      <NextBtn>
        <img src={next} />
      </NextBtn>
    </Wrapper>
  );
};

export default ImageBox;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const BeforeBtn = styled.div`
  height: 25px;
  cursor: pointer;
`;

const Image = styled.img`
  margin: 0px 15px;
  width: 660px;
  height: 500px;
  border-radius: 10px;
  object-fit: cover;
`;

const NextBtn = styled.div`
  height: 25px;
  cursor: pointer;
`;
