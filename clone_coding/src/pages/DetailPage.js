import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import ImageBox from "../components/ImageBox";
import profile from "../assets/icons/profile.png";

const DetailPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <ImageBox />
      <ProfileBox>
        <Profile>
          <img src={profile} />
          <ProfileInfo>
            <span id="username">닉네임없어요</span>
            <span id="place">관악구 성현동</span>
          </ProfileInfo>
        </Profile>
        <MannerBox></MannerBox>
      </ProfileBox>
      <Content>
        <ItemInfo>
          <span id="title">베트남 동 판매합니다.</span>
          <span id="category">티켓/교환권 · 6일 전</span>
          <span id="price">688,000원</span>
        </ItemInfo>
        <Description>
          베트남 여행 후 남은 동 일괄판매 합니다. <br />
          12,520,000동 <br />
          688,000원 지금 네이버 시세 사진도 게시 하였습니다. <br />
          장소는 관악구 어디든 좋습니다. <br />
          시간은 평일 13시~16시 입니다.
        </Description>
        <Interest>관심 3 · 채팅 19 · 조회 1277</Interest>
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
  padding: 30px 0px;
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
  gap: 2px;
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

const MannerBox = styled.div``;

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
`;

const Interest = styled.div`
  font-family: pretendard;
  font-size: 14px;
  font-weight: 300;
  color: #868e96;
`;
