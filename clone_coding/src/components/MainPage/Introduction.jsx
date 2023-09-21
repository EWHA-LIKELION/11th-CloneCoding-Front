import styled from 'styled-components';

// images
import introCover from '../../images/intro-cover.webp';

const Introduction = () => {
  return (
    <Wrapper>
      <h1>
        믿을만한 <br />
        이웃 간 중고거래
      </h1>
      <h2>
        동네 주민들과 가깝고 따뜻한 거래를 <br />
        지금 경험해보세요.
      </h2>

      <div>
        <img src={introCover} alt='introduction' />
      </div>
    </Wrapper>
  );
};

export default Introduction;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 315px;
  margin-top: 64px;
  box-sizing: border-box;
  background-color: #fff1aa;

  h1 {
    min-width: 769px;
    margin-top: 50px;
    margin-bottom: 0px;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.5;
  }

  h2 {
    min-width: 769px;
    margin-top: 16px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.32;
    color: #212529;
  }

  div {
    position: absolute;
    min-width: 769px;

    img {
      position: absolute;
      right: 0;
      width: 416px;
      height: 315px;
    }
  }
`;
