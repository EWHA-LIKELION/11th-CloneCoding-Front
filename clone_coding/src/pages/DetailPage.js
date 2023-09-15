import React from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import ImageBox from "../components/ImageBox";
import profile from "../assets/icons/profile.png";
import midTemp from "../assets/icons/midTemp.png";

const DetailPage = () => {
  const location = useLocation();
  const itemData = location.state.itemData;

  return (
    <Wrapper>
      <TopBar />
      <ImageBox id={itemData.id} images={itemData.images} />
      <ProfileBox>
        <Profile>
          <img src={profile} />
          <ProfileInfo>
            <span id="username">{itemData.username}</span>
            <span id="place">{itemData.place}</span>
          </ProfileInfo>
        </Profile>
        <MannerBox>
          <ViewTemp>
            <Temperature>
              <span>{itemData.temp} °C</span>
              <TempBar>
                <div id="bar">
                  <div id="current"></div>
                </div>
              </TempBar>
            </Temperature>
            <img src={midTemp} />
          </ViewTemp>
          <span>매너온도</span>
        </MannerBox>
      </ProfileBox>
      <Content>
        <ItemInfo>
          <span id="title">{itemData.title}</span>
          <span id="category">
            {itemData.category} · {itemData.date}
          </span>
          <span id="price">{itemData.price}원</span>
        </ItemInfo>
        <Description>
          {itemData.content &&
            itemData.content
              .split("<br/>")
              .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </Description>
        <Interest>
          관심 {itemData.likes} · 채팅 {itemData.chats} · 조회 {itemData.views}
        </Interest>
      </Content>
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

const ProfileBox = styled.div`
  width: 660px;
  display: flex;
  justify-content: space-between;
  padding: 30px 0px 15px 0px;
`;

const Profile = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  img {
    width: 42px;
    height: 42px;
    border-radius: 40px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  #username {
    font-family: pretendard;
    font-size: 16px;
    font-weight: 500;
    color: #212124;
  }
  #place {
    font-family: pretendard;
    font-size: 14px;
    font-weight: 300;
    color: #212124;
  }
`;

const MannerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
  span {
    padding-top: 2px;
    font-family: pretendard;
    font-size: 14px;
    font-weight: 300;
    color: #868e96;
  }
`;

const ViewTemp = styled.div`
  display: flex;
  gap: 6px;
  img {
    width: 32px;
    height: 32px;
  }
`;

const TempBar = styled.div`
  #bar {
    position: relative;
    width: 100px;
    height: 4px;
    align-self: stretch;
    border-radius: 4px;
    background: #eceaea;
  }
  #current {
    position: absolute;
    width: 41px;
    height: 4px;
    border-radius: 4px;
    background: #319e45;
    z-index: 10;
  }
`;

const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
  span {
    font-family: pretendard;
    font-size: 16px;
    font-weight: 700;
    color: #319e45;
  }
`;

const Content = styled.div`
  width: 660px;
  padding: 40px 0px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  #title {
    font-family: pretendard;
    font-size: 20px;
    font-weight: 700;
    color: #212124;
  }
  #category {
    font-family: pretendard;
    font-size: 14px;
    font-weight: 300;
    color: #868e96;
  }
  #price {
    font-family: pretendard;
    font-size: 18px;
    font-weight: 700;
    color: #212124;
  }
`;

const Description = styled.div`
  line-height: 160%;
  letter-spacing: -0.4px;
  p {
    margin: 2px 0px;
  }
`;

const Interest = styled.div`
  font-family: pretendard;
  font-size: 14px;
  font-weight: 300;
  color: #868e96;
`;
