import React, { useState } from "react";
import { styled } from "styled-components";

import logo from "../assets/icons/logo.jpg";
import delBtn from "../assets/icons/delete.svg";

const TopBar = () => {
  const [text, setText] = useState("");

  //검색창 검색어 저장 함수
  const onChange = (e) => {
    setText(e.target.value);
  };

  //검색창 검색어 삭제 함수
  const deleteText = () => {
    setText("");
  };

  return (
    <Wrapper>
      <Container_Left>
        <Logo>
          <img src={logo} />
          <span>당근</span>
        </Logo>
        <BtnBox>
          <button id="clicked">중고거래</button>
          <button>동네가게</button>
          <button>알바</button>
          <button>부동산 직거래</button>
          <button>중고차 직거래</button>
        </BtnBox>
      </Container_Left>
      <Container_Right>
        <InputContainer>
          <SearchBox
            type="text"
            placeholder="물품이나 동네를 검색해보세요"
            onChange={onChange}
            value={text}
          />
          {text && (
            <DeleteBtn onClick={deleteText}>
              <img src={delBtn} alt="검색어 삭제 버튼" />
            </DeleteBtn>
          )}
        </InputContainer>
        <ChatBtn>채팅하기</ChatBtn>
      </Container_Right>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  padding: 5px;
  gap: 80px;
`;

const Container_Left = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Container_Right = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
  }
  span {
    padding-top: 5px;
    font-family: pretendard;
    font-weight: 800;
    font-size: 24px;
    color: #ff6f0f;
  }
`;

const BtnBox = styled.div`
  padding-top: 5px;
  display: flex;
  gap: 20px;
  button {
    background-color: transparent;
    border: none;
    font-family: pretendard;
    font-size: 20px;
    font-weight: 700;
    color: #4d5159;

    &:hover {
      color: #7a7d87;
    }
  }
  #clicked {
    color: #ff6f0f;
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchBox = styled.input`
  margin-top: 5px;
  padding: 6px 9px;
  border: none;
  outline: none;
  width: 264px;
  height: 30px;
  border-radius: 5px;
  background-color: #f2f3f6;
  font-family: pretendard;
  font-size: 16px;
  font-weight: 300;
  color: #212124;
`;

const DeleteBtn = styled.div`
  position: absolute;
  right: 12px;
  display: flex;
  width: 16px;
  height: 16px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
  }
`;

const ChatBtn = styled.button`
  margin-top: 5px;
  padding: 10px 16px;
  background-color: transparent;
  border: 1px solid #b7b7b7;
  border-radius: 5px;
  font-family: pretendard;
  font-size: 16px;
  font-weight: 600;
  color: #212124;
  &:hover {
    background-color: #e2e2e2;
    color: #7a7d87;
  }
`;
