import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mainlogo from "../images/mainlogo.png";

const Header = () => {
    const navigate = useNavigate();
    const gotoMain = () => {
        navigate("/");
    };
    return (
        <>
            <Wrapper>
                <Container>
                    <Logo>
                        <img src={mainlogo} />
                    </Logo>
                    <Menus>
                        <div
                            className="menu"
                            onClick={gotoMain}
                            style={{ color: "#ff6f0f" }}
                        >
                            중고거래
                        </div>
                        <div className="menu">동네가게</div>
                        <div className="menu">알바</div>
                        <div className="menu">부동산 직거래</div>
                        <div className="menu">중고차 직거래</div>
                    </Menus>
                    <Search>
                        <input
                            className="searchbox"
                            placeholder="물품이나 동네를 검색해보세요"
                        ></input>
                        <div className="chatBtn">채팅하기</div>
                    </Search>
                </Container>
            </Wrapper>
        </>
    );
};
export default Header;

const Wrapper = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 64px;
    top: 0;
    left: 0;
    background-color: white;

    display: flex;
    justify-content: center;
`;
const Container = styled.div`
    display: flex;
    width: 1160px;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.div`
    img {
        width: 65px;
    }
`;
const Menus = styled.div`
    width: 600px;
    height: 23.75px;

    display: flex;
    align-items: center;
    .menu {
        font-size: 18px;
        font-weight: 600;
        color: #4d5159;
        margin-right: 30px;
        cursor: pointer;
    }
    .menu:hover {
        color: #848484;
    }
`;

const Search = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 397.33px;

    .searchbox {
        width: 288px;
        background-color: #f2f3f6;
        margin: 16px 10px;
        padding: 9px 12px;
        border: none;
        font-size: 16px;
        border-radius: 5px;
    }
    .chatBtn {
        width: 97.33px;
        font-size: 16px;
        font-weight: 600;
        padding: 8px 8px;
        border-radius: 0.4rem;
        border: 1px solid #d8d8d8;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
