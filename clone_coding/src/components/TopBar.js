import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//components

//images
import logo from "../images/logo.png";
import searchingicon from "../images/searchingicon.png";

const TopBar = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("중고거래");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // 더미 카테고리 데이터
  const categories = [
    "중고거래",
    "동네가게",
    "알바",
    "부동산 직거래",
    "중고차 직거래",
  ];

  return (
    <Container>
      <CateDiv>
        <Logo src={logo} />
        <Category>
          {categories.map((category) => (
            <CateLi
              key={category}
              onClick={() => handleCategoryClick(category)}
              isSelected={selectedCategory === category}
            >
              {category}
            </CateLi>
          ))}
        </Category>
      </CateDiv>
      <SearchingDiv>
        <SearchingBar placeholder="물품이나 동네를 검색해보세요." />
        <SearchingIcon src={searchingicon} />
        <ChattingBtn>채팅하기</ChattingBtn>
      </SearchingDiv>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  max-width: 120rem;
  height: 30px;
  padding: 1.2rem 2rem;
  margin: 0 auto;
`;

const Font = styled.div`
  color: #fff;
  font-family: "Pretendard-Regular";
  font-style: normal;
  line-height: 100%; /* 15px */
  letter-spacing: -0.3px;
`;

const CateDiv = styled.section`
  display: flex;
  align-items: center;
  width: 100%;

  padding-right: 4rem;
`;

const Logo = styled.img`
  width: 65px;
  align-items: center;
  margin-right: 3.6rem;
`;

const Category = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  padding: 0 40px 0 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

const CateLi = styled.li`
  list-style: none;
  margin-right: 30px;
  font-size: 18px;
  font-weight: 600;

  cursor: pointer;
  &:hover {
    color: #81868f;
  }
  color: ${(props) => (props.isSelected ? "#ff6f0f" : "#000")};
`;

const SearchingDiv = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchingBar = styled.input`
  width: 264px;
  height: 22px;
  padding: 9px 12px;
  margin: 16px 12px 16px 0px;

  cursor: text;
  border-radius: 6px;
  background-color: #f2f3f6;
  border: none;
  outline: none;

  @media (max-width: 992px) {
    display: none;
  }
`;
const SearchingIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;

  border-radius: 50%;
  border: none;

  @media (min-width: 992px) {
    display: none;
  }
`;

const ChattingBtn = styled.button`
  padding: 8px 16px;
  margin: 16px 0px;
  height: 40px;

  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  color: #212529;
  text-align: center;
  text-wrap: nowrap;
  font-weight: 700;
  background-color: #fff;

  cursor: pointer;
`;
