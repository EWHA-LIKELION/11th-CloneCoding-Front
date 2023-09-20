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
            <div
                style={{
                    width: "40%",
                    position: "absolute",
                    bottom: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ul>{dots}</ul>
            </div>
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
    border-radius: 20px;
    align-items: center;

    .slick-prev::before {
        opacity: 0;
        display: none;
    }
    .slick-next::before {
        opacity: 0;
        display: none;
    }
    .slick-prev {
        left: -40px;
    }
    .slick-next {
        right: -40px;
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
    border-radius: 20px;
    overflow: hidden;
    img {
        width: 100%;
    }
`;
