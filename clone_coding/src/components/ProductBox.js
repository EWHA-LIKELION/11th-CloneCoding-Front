import { PhotoMock } from "../mockdata/PhotoMock";
import { ContentMock } from "../mockdata/ContentMock";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductBox = () => {
  return (
    <ProductGrid>
      {PhotoMock.map((photo, id) => (
        <div key={id}>
          <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
            <img src={photo} alt={`Image ${id}`} />
            <Text>
              <p style={{ fontSize: "19px" }}>{ContentMock[id].title}</p>
              <p
                style={{
                  fontSize: "19px",
                  fontWeight: "700",
                  marginTop: "-10px",
                }}
              >
                {ContentMock[id].price}원
              </p>
              <p
                style={{
                  fontSize: "16px",
                  marginTop: "-10px",
                  marginBottom: "10px",
                }}
              >
                {ContentMock[id].address}
              </p>
              <span style={{ fontSize: "16px" }}>
                관심 {ContentMock[id].likes} ·
              </span>
              <span style={{ fontSize: "16px", marginLeft: "5px" }}>
                채팅 {ContentMock[id].chats}
              </span>
            </Text>
          </Link>
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
