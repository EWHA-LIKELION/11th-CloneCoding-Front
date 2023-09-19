import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

import p1 from "../images/p1.png";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import profileImg from "../images/profileImg.png";
import t1 from "../images/t1.png";

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
                    />
                    <img src={p1} />
                    <FaChevronRight
                        className="right"
                        size="25"
                        style={{ color: "#212529" }}
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
                <Text>
                    <div className="text">매너온도</div>
                </Text>
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
const Text = styled.div`
    width: 677px;
    display: flex;

    justify-content: flex-end;
    margin-top: 5px;
    .text {
        font-size: 13px;
        color: #868e96;
    }
`;
