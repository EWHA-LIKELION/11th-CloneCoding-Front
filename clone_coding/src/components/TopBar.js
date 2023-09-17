import React from "react";
import styled from "styled-components";
import Logo from "../assets/icons/Logo.png";

const TopBar = () => {
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
        <input type="text" placeholder="물품이나 동네를 검색해보세요" />
        <Chatting>채팅하기</Chatting>
      </RightSide>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: center;
  align-items: center;

  .logo-img {
    width: 80px;
    height: 40px;
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
  gap: 35px;

  .o {
    font-size: 23px;
    font-weight: 600;
    color: #ff6f0f;
  }

  .x {
    font-size: 23px;
    font-weight: 600;
    color: #4d5159;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  input {
    width: 320px;
    height: 33px;
    background-color: #f2f3f6;
    padding: 9px 12px;
    margin: 16px 0px;
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 19px;
    color: lightgray;
    text-align: center;
  }
`;

const Chatting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid #ced4da;
  color: #212529;
  font-size: 20px;
  font-weight: 700;
  background-color: #fff;
  text-decoration: none;
`;
