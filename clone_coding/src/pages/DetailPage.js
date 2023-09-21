import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PopularProduct from "../components/PopularProduct";

// import ProductCard from "../components/ProductCard";
import { ProductData } from "../_mock/ProductData";
import { useParams } from "react-router-dom";

// import p1 from "../images/p1.png";
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
import { ProductPhoto } from "../_mock/ProductPhoto";

import ImageSlide from "../components/ImageSlide";

const DetailPage = () => {
    const params = useParams();
    const itemId = parseInt(params.id, 10);
    //해당 이미지 추출
    const selectedPhoto = ProductPhoto.find((photo) => photo.id === itemId + 1);

    //매너온도 색상 지정
    const tColor = (temp) => {
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
    //매너온도 막대바 가로길이 계산
    const tWidth = (temp) => {
        return `${temp}px`;
    };
    //매너온도 아이콘 지정
    const tIcon = (temp) => {
        if (temp <= 36.2) {
            return t1;
        } else if (temp <= 37.5) {
            return t2;
        } else if (temp <= 42) {
            return t3;
        } else if (temp <= 52) {
            return t4;
        } else {
            return t5;
        }
    };

    const topScroll = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        topScroll();
    }, [itemId]);

    return (
        <>
            <Wrapper>
                <Header />
                <ImageSlide id={itemId} imgs={ProductData[itemId].imgs} />
                {/* <PhotoWrapper>
                    <FaChevronLeft
                        className="left"
                        size="25"
                        style={{ color: "#212529" }}
                        hoverStyle={{ color: "#e6e6e6" }}
                    />
                    <img src={selectedPhoto ? selectedPhoto.img : ""} />
                    <FaChevronRight
                        className="right"
                        size="25"
                        style={{ color: "#212529" }}
                        hoverStyle={{ color: "#e6e6e6" }}
                    />
                </PhotoWrapper> */}
                <SellerInfo>
                    <ProfileWrapper>
                        <img src={profileImg} />
                        <div>
                            <div className="sellerName">
                                {ProductData[itemId].sellerName}
                            </div>
                            <div className="sellerPlace">
                                {ProductData[itemId].place}
                            </div>
                        </div>
                    </ProfileWrapper>
                    <MannerWrapper>
                        <MannerBar>
                            <div
                                className="temp"
                                style={{
                                    color: tColor(ProductData[itemId].temp),
                                }}
                            >
                                {ProductData[itemId].temp}°C
                            </div>
                            <div className="underbar">
                                <div
                                    className="tempbar"
                                    style={{
                                        backgroundColor: tColor(
                                            ProductData[itemId].temp
                                        ),
                                        width: tWidth(ProductData[itemId].temp),
                                    }}
                                ></div>
                            </div>
                        </MannerBar>
                        <img
                            src={tIcon(ProductData[itemId].temp)}
                            width={30}
                            height={30}
                        />
                    </MannerWrapper>
                </SellerInfo>
                <MannerText>
                    <div className="text">매너온도</div>
                </MannerText>
                <ProductInfo>
                    <hr />
                    <div className="title">{ProductData[itemId].name}</div>
                    <div className="category">
                        {ProductData[itemId].category}
                    </div>
                    <div className="price">{ProductData[itemId].price}원</div>
                    <div className="detail">{ProductData[itemId].detail}</div>
                    <div className="interest">
                        {ProductData[itemId].interest}
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
        margin-bottom: 7px;
    }
    .underbar {
        width: 100px;
        height: 4px;
        background-color: #e9ecef;
        .tempbar {
            height: 4px;
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
