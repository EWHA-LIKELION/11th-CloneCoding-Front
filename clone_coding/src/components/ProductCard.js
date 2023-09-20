import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//mock data
import { ProductPhoto } from "../_mock/ProductPhoto";
import { ProductData } from "../_mock/ProductData";

const ProductCard = () => {
    const navigate = useNavigate();
    const gotoDetail = () => {
        navigate("/detailpage");
    };

    const pImg = ProductPhoto.map((item) => item.img);

    return (
        <>
            <Wrapper>
                <Container>
                    {/* <img onClick={gotoDetail} src={p1} /> */}
                    {pImg.map((photo, id) => (
                        <div key={id}>
                            <img
                                src={photo}
                                onClick={gotoDetail}
                                style={{
                                    width: "223px",
                                    height: "223px",
                                    borderRadius: "15px",
                                }}
                            />
                            <div className="name">{ProductData[id].name}</div>
                            <div className="price">{ProductData[id].price}</div>
                            <div className="place">{ProductData[id].place}</div>
                            <div className="cart">{ProductData[id].cart}</div>
                        </div>
                    ))}
                </Container>
            </Wrapper>
        </>
    );
};
export default ProductCard;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const Container = styled.div`
    position: relative;

    width: 757px;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 45px;

    img {
        cursor: pointer;
    }
    .name {
        font-size: 16px;
        color: #212529;
        margin-top: 15px;
        cursor: pointer;
    }
    .price {
        font-size: 15px;
        font-weight: 600;
        color: #212529;
        margin-top: 10px;
        cursor: pointer;
    }
    .place {
        font-size: 13px;
        color: #212529;
        margin-top: 5px;
        cursor: pointer;
    }
    .cart {
        font-size: 13px;
        color: #868e96;
        margin-top: 5px;
        cursor: pointer;
    }
`;
