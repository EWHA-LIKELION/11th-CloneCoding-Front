import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//mock data
import p1 from "../images/p1.png";

const ProductCard = (props) => {
    const { productData } = props;

    const navigate = useNavigate();
    const gotoDetail = () => {
        navigate("/detailpage");
    };

    return (
        <>
            <Wrapper>
                <img onClick={gotoDetail} src={p1} />
                <div className="name">{productData.name}</div>
                <div className="price">{productData.price}</div>
                <div className="place">{productData.place}</div>
                <div className="cart">{productData.cart}</div>
            </Wrapper>
        </>
    );
};
export default ProductCard;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    cursor: pointer;

    img {
        width: 223px;
        height: 223px;
        border-radius: 15px;
    }
    .name {
        font-size: 16px;
        color: #212529;
        margin-top: 15px;
    }
    .price {
        font-size: 15px;
        font-weight: 600;
        color: #212529;
        margin-top: 10px;
    }
    .place {
        font-size: 13px;
        color: #212529;
        margin-top: 5px;
    }
    .cart {
        font-size: 13px;
        color: #868e96;
        margin-top: 5px;
    }
`;
