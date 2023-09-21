import styled from 'styled-components';
import {useState} from 'react';

// components
import Item from '../Item';

import {itemData} from '../../_mock/itemData';

const ItemBoard = () => {
  const [items, setItem] = useState(itemData); //매물 목록

  return (
    <Wrapper>
      <h1>중고거래 인기매물</h1>

      {/* 인기매물 대시보드 */}
      <Dashboard>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Dashboard>
    </Wrapper>
  );
};

export default ItemBoard;

const Wrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 769px;
  height: 100%;

  h1 {
    margin: 0;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.5;
  }
`;

const Dashboard = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 44px;
  width: 757px;
  height: 100%;
`;
