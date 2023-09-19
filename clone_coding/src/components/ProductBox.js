import React, { useState } from "react";
import { PhotoMock } from "../mockdata/PhotoMock";
import { ContentMock } from "../mockdata/ContentMock";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductBox = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(true);
  };

  return (
    <Wrapper>
      <ProductGrid>
        {PhotoMock.slice(0, showMore ? PhotoMock.length : 12).map(
          (photo, id) => (
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
          )
        )}
      </ProductGrid>
      {!showMore && (
        <Button onClick={handleShowMoreClick}>인기매물 더 보기</Button>
      )}
    </Wrapper>
  );
};

export default ProductBox;

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
    width: 223px;
    height: 223px;
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

const Button = styled.div`
  color: #212529;
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;
