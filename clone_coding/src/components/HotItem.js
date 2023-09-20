import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PhotoMock } from "../mockdata/PhotoMock";
import { ContentMock } from "../mockdata/ContentMock";
import { Link } from "react-router-dom";

const HotItem = () => {
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    const photoData = [...PhotoMock];

    // 데이터 랜덤 배열
    for (let i = photoData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [photoData[i], photoData[j]] = [photoData[j], photoData[i]];
    }

    const randomImg = photoData.slice(0, 6);

    // 이미지랑 설명 id 일치시키기
    const matchedData = randomImg.map((img) => {
      const randomContent = ContentMock.find((item) => item.id === img.id);
      return {
        id: img.id,
        title: randomContent.title,
        address: randomContent.address,
        price: randomContent.price,
        likes: randomContent.likes,
        chats: randomContent.chats,
        mainImg: img.mainImg,
      };
    });

    setRandomItems(matchedData);
  }, []);

  return (
    <Wrapper>
      <ProductGrid>
        {randomItems.map((data) => (
          <div key={data.id} style={{ marginBottom: "20px" }}>
            <Link to={`/detail/${data.id}`} style={{ textDecoration: "none" }}>
              <img src={data.mainImg} alt={`Image ${data.id}`} />
              <Text>
                <p style={{ fontSize: "16px" }}>{data.title}</p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    marginTop: "-7px",
                  }}
                >
                  {data.price}원
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "-7px",
                    marginBottom: "5px",
                  }}
                >
                  {data.address}
                </p>
                <span style={{ fontSize: "13px" }}>관심 {data.likes} ·</span>
                <span style={{ fontSize: "13px", marginLeft: "5px" }}>
                  채팅 {data.chats}
                </span>
              </Text>
            </Link>
          </div>
        ))}
      </ProductGrid>
    </Wrapper>
  );
};

export default HotItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-randomcontent: center;
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
