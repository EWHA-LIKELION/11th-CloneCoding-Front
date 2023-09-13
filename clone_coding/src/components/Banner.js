import React from "react";
import styled from "styled-components";

import bannerImg from "../images/bannerImg.png";

const Banner = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <Content>
                        <div className="title">
                            믿을만한<br></br>이웃 간 중고거래
                        </div>
                        <div className="subtitle">
                            동네 주민들과 가깝고 따뜻한 거래를<br></br>지금
                            경험해보세요.
                        </div>
                    </Content>
                    <img src={bannerImg} />
                </Container>
            </Wrapper>
        </>
    );
};

export default Banner;

const Wrapper = styled.div`
    width: 100%;
    height: 315px;
    background-color: #fff1aa;
    position: absolute;
    top: 64px;
    left: 0;

    display: flex;
    justify-content: center;
`;
const Container = styled.div`
    width: 768px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .img {
        width: 416px;
    }
`;
const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;
    .title {
        font-size: 34px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: -0.32px;
    }
    .subtitle {
        font-size: 18px;
        line-height: 1.32;
        margin-top: 16px;
        letter-spacing: -0.18px;
    }
`;
