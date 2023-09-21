import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import next from '../../images/next.png';
import back from '../../images/back.png';

function SimpleSlider({id, images}) {
  const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => (
    <span {...props}>{children}</span>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SlickButtonFix>
        <Arrow>
          <img src={next} alt='next button' />
        </Arrow>
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <Arrow>
          <img src={back} alt='back button' />
        </Arrow>
      </SlickButtonFix>
    ),
    appendDots: (dots) => (
      <DoxBox>
        <ul> {dots} </ul>
      </DoxBox>
    ),
    dotsClass: 'dots_custom',
  };

  const navigate = useNavigate();

  return (
    <div>
      <StyledSlider {...settings}>
        {images.map((url, index) => (
          <ImageBox key={index}>
            <img
              src={url}
              alt={`slide ${index + 1}`}
              onClick={() => {
                navigate(`/articles/${id}/${index}`);
              }}
            />
          </ImageBox>
        ))}
      </StyledSlider>
    </div>
  );
}

export default SimpleSlider;

const StyledSlider = styled(Slider)`
  margin-top: 94px;
  display: flex;
  align-items: center;
  width: 672px;
  height: 500px;
  position: relative;

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
`;

const Arrow = styled.div`
  width: 21px;
  height: 21px;

  img {
    width: 100%;
  }
`;

const ImageBox = styled.div`
  width: 672px;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const DoxBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );

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
    cursor: pointer;
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    padding: 0;
  }

  li.slick-active button {
    background-color: #ffffff;
  }
`;
