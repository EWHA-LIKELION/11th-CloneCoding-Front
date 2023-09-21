import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import back from "../images/back.png";
import next from "../images/next.png";

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
        <Arrow>
          <img src={next} alt="next" />
        </Arrow>
      </SlideButton>
    ),
    prevArrow: (
      <SlideButton>
        <Arrow>
          <img src={back} alt="back" />
        </Arrow>
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

const Arrow = styled.div`
  width: 21px;
  height: 21px;

  img {
    width: 100%;
  }
`;
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
    left: -35px;
  }
  .slick-next {
    right: -35px;
  }
`;
const ImgWrapper = styled.div`
  width: 660px;
  height: 500px;
  border-radius: 9px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const DotWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
    background: #d1d1d1;
    color: transparent;
    height: 9px;
    width: 9px;
    border-radius: 100%;
    cursor: pointer;
    padding: 0;
  }
  li.slick-active button {
    background-color: #ffffff;
  }
`;
