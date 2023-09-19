import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/icons/Logo.png";
import Delete from "../assets/icons/delete.svg";

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
      <img src={Logo} className="logo-img" />
      <Category>
        <span className="o">중고거래</span>
        <span className="x">동네가게</span>
        <span className="x">알바</span>
        <span className="x">부동산 직거래</span>
        <span className="x">중고차 직거래</span>
      </Category>
      <RightSide>
        <Input
          type="text"
          placeholder="물품이나 동네를 검색해보세요"
          onChange={onChange}
          value={text}
        />
        {text && (
          <DeleteBtn onClick={deleteText}>
            <img src={Delete} alt="검색어 삭제 버튼" />
          </DeleteBtn>
        )}

        <Chatting>채팅하기</Chatting>
      </RightSide>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  top: 0px;
  background-color: white;
  position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  align-items: center;

  .logo-img {
    width: 65px;
    height: 33px;
    margin-bottom: 4px;
  }

  .search-img {
    width: 20px;
    height: 20px;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  margin-left: -13px;

  .o {
    font-size: 18px;
    font-weight: 600;
    color: #ff6f0f;

    cursor: pointer;
  }

  .x {
    font-size: 18px;
    font-weight: 600;
    color: #4d5159;
    cursor: pointer;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-left: 85px;
`;

const Input = styled.input`
  width: 265px;
  height: 22px;
  background-color: #f2f3f6;
  padding: 9px 12px;
  margin: 16px 0px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  color: #212529;
  text-align: start;
  cursor: pointer;
`;

const DeleteBtn = styled.div`
  margin-left: -40px;
  display: flex;
  width: 16px;
  height: 16px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const Chatting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97.6px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #ced4da;
  color: #212529;
  font-size: 16px;
  font-weight: 700;
  background-color: #fff;
  text-decoration: none;
  cursor: pointer;
`;
