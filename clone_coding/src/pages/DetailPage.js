import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PopularProduct from "../components/PopularProduct";

import ProductCard from "../components/ProductCard";
import productData from "../_mock/ProductData";

import p1 from "../images/p1.png";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import profileImg from "../images/profileImg.png";

//매너온도 이미지
import t0 from "../images/t0.png";
import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import t4 from "../images/t4.png";
import t5 from "../images/t5.png";

const DetailPage = () => {
    return (
        <>
            <Wrapper>
                <Header />
                <PhotoWrapper>
                    <FaChevronLeft
                        className="left"
                        size="25"
                        style={{ color: "#212529" }}
                        hoverStyle={{ color: "#e6e6e6" }}
                    />
                    <img src={p1} />
                    <FaChevronRight
                        className="right"
                        size="25"
                        style={{ color: "#212529" }}
                        hoverStyle={{ color: "#e6e6e6" }}
                    />
                </PhotoWrapper>
                <SellerInfo>
                    <ProfileWrapper>
                        <img src={profileImg} />
                        <div>
                            <div className="sellerName">우진우빈파더</div>
                            <div className="sellerPlace">
                                수원시 영통구 망포동
                            </div>
                        </div>
                    </ProfileWrapper>
                    <MannerWrapper>
                        <MannerBar>
                            <div className="temp">36.8°C</div>
                            <div className="underbar">
                                <div className="tempbar"></div>
                            </div>
                        </MannerBar>
                        <img src={t1} width={30} height={30} />
                    </MannerWrapper>
                </SellerInfo>
                <MannerText>
                    <div className="text">매너온도</div>
                </MannerText>
                <ProductInfo>
                    <hr />
                    <div className="title">아내가 제 아이패드 팔아서</div>
                    <div className="category">기타 중고물품 ∙ 3일전</div>
                    <div className="price">700,000원</div>
                    <div className="detail">
                        진품은 맞고요 얼마인지는 모르겠고 아내가 제 아이패드
                        마음대로 팔아서 저도 똑같이 샤넬백 팝니다. 다시
                        돌려달라고 안할거고요 아내도요.
                    </div>
                    <div className="interest">
                        관심 86 ∙ 채팅 105 ∙ 조회 3260
                    </div>
                    <hr />
                </ProductInfo>
                <PopularProduct />
            </Wrapper>
        </>
    );
};
export default DetailPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PhotoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 729px;
    height: 500px;
    img {
        width: 677px;
        height: 500px;

        border-radius: 20px;
    }
    margin-top: 80px;
    .left:hover {
        color: #e6e6e6;
    }
    .right:hover {
        color: #e6e6e6;
    }
`;
const SellerInfo = styled.div`
    width: 677px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 20px;
`;
const ProfileWrapper = styled.div`
    display: flex;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .sellerName {
        font-size: 15px;
        font-weight: 600;
    }
    .sellerPlace {
        font-size: 13px;
    }
`;
const MannerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        margin-left: 10px;
    }
`;
const MannerBar = styled.div`
    display: flex;
    flex-direction: column;
    .temp {
        display: flex;
        align-self: flex-end;
        font-size: 15px;
        font-weight: 600;
        color: #1561a9;
        margin-bottom: 7px;
    }
    .underbar {
        width: 100px;
        height: 4px;
        background-color: #e9ecef;
        .tempbar {
            width: 37px;
            height: 4px;
            background-color: #1561a9;
        }
    }
`;
const MannerText = styled.div`
    width: 677px;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
    .text {
        font-size: 13px;
        color: #868e96;
    }
`;
const ProductInfo = styled.div`
    width: 677px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    hr {
        width: 100%;
        background-color: white;
        color: white;
    }
    .title {
        font-size: 20px;
        font-weight: 600;
        margin-top: 28px;
    }
    .category {
        font-size: 13px;
        color: #868e96;
        margin-top: 5px;
    }
    .price {
        font-size: 17px;
        font-weight: 600;
        margin-top: 8px;
    }
    .detail {
        font-size: 17px;
        margin-top: 15px;
    }
    .interest {
        font-size: 13px;
        color: #868e96;
        margin-top: 15px;
        margin-bottom: 25px;
    }
`;
