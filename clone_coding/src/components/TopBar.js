import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import Search from "../assets/Search.png";

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
      <img src={Search} className="search-img" />
      <Chatting>채팅하기</Chatting>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
    font-size: 25px;
    font-weight: 600;
    color: #ff6f0f;
  }

  .x {
    font-size: 25px;
    font-weight: 600;
    color: #4d5159;
  }
`;
const Chatting = styled.div`
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  color: #212529;
  text-align: center;
  font-weight: 700;
  background-color: #fff;
  margin: 1.6rem 0;
  text-decoration: none;
`;
