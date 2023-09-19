import React from "react";
import styled from "styled-components";
import { PhotoMock } from "../mockdata/PhotoMock";
import { ContentMock } from "../mockdata/ContentMock";
import { Link } from "react-router-dom";

const HotItem = () => {
  // PhotoMock 배열의 복사본 생성
  const shuffledArray = [...PhotoMock];

  // 배열 랜덤하게 섞기
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // 랜덤하게 선택한 6개 가져오기
  const randomPhotos = shuffledArray.slice(0, 6);

  return (
    <ProductGrid>
      {randomPhotos.map((photo, id) => (
        <div key={id} style={{ marginBottom: "20px" }}>
          <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
            <img src={photo} alt={`Image ${id}`} />
            <Text>
              <p style={{ fontSize: "16px" }}>{ContentMock[id].title}</p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  marginTop: "-7px",
                }}
              >
                {ContentMock[id].price}원
              </p>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "-7px",
                  marginBottom: "5px",
                }}
              >
                {ContentMock[id].address}
              </p>
              <span style={{ fontSize: "13px" }}>
                관심 {ContentMock[id].likes} ·
              </span>
              <span style={{ fontSize: "13px", marginLeft: "5px" }}>
                채팅 {ContentMock[id].chats}
              </span>
            </Text>
          </Link>
        </div>
      ))}
    </ProductGrid>
  );
};

export default HotItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  cursor: pointer;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
  }
`;
const Text = styled.div`
  p {
    color: #212529;
  }

  span {
    color: #868e96;
  }
`;
