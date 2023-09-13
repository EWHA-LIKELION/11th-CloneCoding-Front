import { PhotoMock } from "../mockdata/PhotoMock";
import { ContentMock } from "../mockdata/ContentMock";
import styled from "styled-components";

const ProductBox = () => {
  return (
    <ProductGrid>
      {PhotoMock.map((photo, index) => (
        <div key={index}>
          <img src={photo} alt={`Image ${index}`} />
          <Text>
            <p style={{ fontSize: "19px" }}>{ContentMock[index].title}</p>
            <p
              style={{
                fontSize: "19px",
                fontWeight: "700",
                marginTop: "-10px",
              }}
            >
              {ContentMock[index].price}원
            </p>
            <p
              style={{
                fontSize: "16px",
                marginTop: "-10px",
                marginBottom: "10px",
              }}
            >
              {ContentMock[index].address}
            </p>
            <span style={{ fontSize: "16px" }}>
              관심 {ContentMock[index].likes} ·
            </span>
            <span style={{ fontSize: "16px", marginLeft: "5px" }}>
              채팅 {ContentMock[index].chats}
            </span>
          </Text>
        </div>
      ))}
    </ProductGrid>
  );
};

export default ProductBox;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-top: 20px;

  img {
    width: 280px;
    height: 280px;
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
