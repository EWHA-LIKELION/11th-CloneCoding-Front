import React from "react";
import { styled } from "styled-components";
import profile from "../images/profile.png";

import best from "../images/faceimage/best.png";
import good from "../images/faceimage/good.png";
import smile from "../images/faceimage/smile.png";
import soso from "../images/faceimage/soso.png";
import bad from "../images/faceimage/bad.png";
import worst from "../images/faceimage/worst.png";

const Content = ({ product }) => {
  var faceImage;
  var faceColor;

  // 매너온도 색상코드
  const tempColor = (temp) => {
    if (temp <= 36.2) {
      return "#0d3a65";
    } else if (temp <= 37.5) {
      return "#1561a9";
    } else if (temp <= 42) {
      return "#319e45";
    } else if (temp <= 52) {
      return "#df9100";
    } else {
      return "#de5d06";
    }
  };
  // 매너온도 표정이미지
  if (product.temp <= 30) {
    faceColor = "#081B2D";
    faceImage = worst;
  } else if (product.temp <= 36.2) {
    faceColor = "#0d3a65";
    faceImage = bad;
  } else if (product.temp <= 37.5) {
    faceColor = "#1561a9";
    faceImage = soso;
  } else if (product.temp <= 42) {
    faceColor = "#319e45";
    faceImage = smile;
  } else if (product.temp <= 52) {
    faceColor = "#df9100";
    faceImage = good;
  } else {
    faceColor = "#de5d06";
    faceImage = best;
  }

  return (
    <Wrapper>
      <UserInfo>
        <div>
          <div>
            <img src={profile} width={40} />
            <ul>
              <li>{product.username}</li>
              <li>{product.place}</li>
            </ul>
          </div>

          <div>
            <ul style={{ textAlign: "right" }}>
              <span style={{ color: faceColor }}>{product.temp}°C</span>

              <TempBar>
                <div
                  style={{
                    backgroundColor: faceColor,
                    width: `${product.temp}%`,
                  }}
                />
              </TempBar>
            </ul>
            <Face src={faceImage} width={25} />
          </div>
        </div>
        <TempText>매너온도</TempText>
      </UserInfo>

      <InfoWrapper>
        <Info>
          <span id="title">{product.title}</span>
          <span id="category">
            {product.category} · {product.when}
          </span>
          <span id="price">{product.price}</span>
        </Info>
        <div>{product.info}</div>
        <span id="like">
          {product.like} {product.chat} · {product.view}
        </span>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Content;
const TempText = styled.div`
  margin-left: auto;
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.6px;
  color: #868e96;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoWrapper = styled.div`
  width: 660px;
  padding: 40px 0px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
  #like {
    font-size: 14px;
    font-weight: 300;
    color: #868e96;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  #title {
    font-size: 20px;
    font-weight: 600;
    color: #212124;
  }
  #category {
    font-size: 14px;
    font-weight: 300;
    color: #868e96;
  }
  #price {
    font-size: 18px;
    font-weight: 600;
    color: #212124;
  }
`;

const TempBar = styled.div`
  position: relative;
  margin-top: 8px;
  width: 100px;
  height: 5px;
  background-color: #e9ecef;
  border-radius: 10px;
  /* 온도만큼 템프바 채워짐 */
  div {
    position: absolute;
    height: 100%;
    border-radius: 10px;
  }
`;

const UserInfo = styled.div`
  img {
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      align-items: center;
      gap: 13px;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li:nth-child(1) {
          line-height: 1.5;
          letter-spacing: -0.5px;
          font-size: 15px;
          font-weight: 600;
        }

        li:nth-child(2) {
          font-size: 13px;
          line-height: 1.46;
          letter-spacing: -0.6px;
        }

        span {
          font-size: 16px;
          font-weight: bold;
          letter-spacing: -0.5px;
          color: #1561a9;
        }
      }
    }
  }
  margin-top: 25px;
  margin-bottom: 11px;
  display: flex;
  flex-direction: column;
  width: 677px;
`;

const TempWrapper = styled.div`
  span {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.5px;
    color: #1561a9;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  span {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.5px;
    color: #1561a9;
  }
`;
const Face = styled.img`
  height: 25px;
`;
