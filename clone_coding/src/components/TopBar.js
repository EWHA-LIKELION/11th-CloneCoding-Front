import React, { useState } from "react";
import { styled } from "styled-components";

import deleteBtn from "../images/delete.svg";
import carrot from "../images/carrot.png";

const TopBar = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const deleteText = () => {
    setText("");
  };

  return (
    <Wrapper>
      <LeftWrapper>
        <Logo>
          <img src={carrot} />
          <span>당근</span>
        </Logo>

        <BtnMenu>
          <button id="orange">중고거래</button>
          <button>동네가게</button>
          <button>알바</button>
          <button>부동산 직거래</button>
          <button>중고차 직거래</button>
        </BtnMenu>
      </LeftWrapper>

      <RightWrapper>
        <InputWrapper>
          <SearchBox
            type="text"
            placeholder="물품이나 동네를 검색해보세요"
            onChange={onChange}
            value={text}
          />
          {text && ( //텍스트 입력시 삭제 이미지
            <DeleteBtn onClick={deleteText}>
              <img src={deleteBtn} />
            </DeleteBtn>
          )}
        </InputWrapper>

        <ChatBtn>채팅하기</ChatBtn>
      </RightWrapper>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  padding: 10px;
  gap: 210px;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const BtnMenu = styled.div`
  padding-top: 5px;
  display: flex;
  gap: 20px;
  button {
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: 700;
    color: #4d5159;
    &:hover {
      color: #7a7d87;
    }
  }
  #orange {
    color: #ff6f0f;
  }
`;
const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ChatBtn = styled.button`
  background-color: transparent;
  margin-top: 5px;
  padding: 10px 15px;

  border: 1px solid #b7b7b7;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #212124;

  &:hover {
    background-color: #f2f3f6;
    color: #7a7d87;
  }
`;
const DeleteBtn = styled.div`
  position: absolute;
  right: 10px;
  padding: 2px;
  display: flex;
  width: 16px;
  height: 16px;

  justify-content: center;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
  }
`;

const SearchBox = styled.input`
  background-color: #f2f3f6;
  margin-top: 5px;
  padding: 6px 9px;
  border: none;
  width: 264px;
  height: 30px;
  border-radius: 5px;

  font-size: 16px;
  font-weight: 300;
  color: #212124;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 35px;
    margin-bottom: 8px;
  }
  span {
    padding-top: 6px;
    font-size: 24px;
    font-weight: 800;
    color: #ff6f0f;
  }
`;
