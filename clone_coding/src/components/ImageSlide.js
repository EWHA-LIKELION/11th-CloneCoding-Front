import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const ImageSlide = ({ id, imgs }) => {
    const SlideButton = ({ currentSlide, slideCount, children, ...props }) => (
        <div {...props}>{children}</div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px일 때
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, //화면 사이즈 768px일 때
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2,
                },
            },
        ],

        nextArrow: (
            <SlideButton>
                <FaChevronRight
                    className="right"
                    size="25"
                    style={{ color: "#212529" }}
                    hoverStyle={{ color: "#e6e6e6" }}
                />
            </SlideButton>
        ),
        prevArrow: (
            <SlideButton>
                <FaChevronLeft
                    className="left"
                    size="25"
                    style={{ color: "#212529" }}
                    hoverStyle={{ color: "#e6e6e6" }}
                />
            </SlideButton>
        ),
        appendDots: (dots) => (
            <DotWrapper>
                <ul>{dots}</ul>
            </DotWrapper>
        ),
        dotsClass: "dots_custom",
    };
    return (
        <>
            <StyledSlider {...settings}>
                {imgs.map((img, index) => (
                    <ImgWrapper key={index}>
                        <img src={img} />
                    </ImgWrapper>
                ))}
            </StyledSlider>
        </>
    );
};
export default ImageSlide;

const StyledSlider = styled(Slider)`
    display: flex;
    width: 677px;
    height: 500px;
    border-radius: 10px;
    align-items: center;
    margin-top: 85px;

    .slick-prev::before {
        opacity: 0;
        display: none;
    }
    .slick-next::before {
        opacity: 0;
        display: none;
    }
    .slick-prev {
        left: -30px;
    }
    .slick-next {
        right: -30px;
    }

    .left:hover {
        color: #e6e6e6;
    }
    .right:hover {
        color: #e6e6e6;
    }
`;
const ImgWrapper = styled.div`
    width: 677px;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(to bottom, #000, #000 30%, transparent);
    img {
        width: 100%;
        height: 100%;
    }
`;
const DotWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 2px;
    border-radius: 10px;
    ul {
        padding: 0;
    }
    li {
        list-style: none;
        cursor: pointer;
        display: inline-block;
        margin: 0 6px;
    }
    li > button {
        border: none;
        height: 8px;
        width: 8px;
        border-radius: 100%;

        background: #d1d1d1;
        color: transparent;
        cursor: pointer;
        padding: 0;
    }
    li.slick-active button {
        background-color: #ffffff;
    }
`;
