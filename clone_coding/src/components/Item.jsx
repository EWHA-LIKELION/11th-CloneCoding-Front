import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Item = ({item}) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate(`/articles/${item.id}`);
      }}
    >
      <div>
        <img src={item.images[0]} alt='item cover' />
      </div>
      <span className='title'>{item.title}</span>
      <span className='price'>{item.price}원</span>
      <span className='place'>{item.place}</span>
      <span className='etc'>
        관심 {item.like} · 채팅 {item.chat}
      </span>
    </Container>
  );
};

export default Item;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  div {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;

    background-color: #212529; //임시
    border-radius: 10px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .title {
    margin-top: 8px;
    font-size: 16px;
    letter-spacing: -0.02px;
  }

  .price {
    font-size: 15px;
    font-weight: 700;
    line-height: 1.5;
  }

  .place {
    font-size: 13px;
    line-height: 1.5;
  }

  .etc {
    font-size: 13px;
    color: #868e96;
  }
`;
