import styled from 'styled-components';
import {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

// images
import backNavigate from '../images/back-navigate.svg';

import {itemData} from '../_mock/itemData';

const ImagePage = () => {
  const navigate = useNavigate();
  const {id, index} = useParams();
  const [itemImage, setItemImage] = useState(itemData[id - 1].images[index]);

  console.log(itemImage);
  return (
    <Page>
      <div>
        <img
          className='back-btn'
          src={backNavigate}
          alt='back button'
          onClick={() => {
            navigate(-1);
          }}
        ></img>
        <img className='full-img' src={itemImage} alt='full' />
      </div>
    </Page>
  );
};

export default ImagePage;

const Page = styled.div`
  background: black;
  height: 100vh;

  div {
    display: flex;
    align-items: center;
    width: 768px;
    height: 100vh;

    position: relative;
    margin: 0px auto;

    .back-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }

    .full-img {
      margin: 0px auto;
      max-width: 100%;
      max-height: 100vh;
    }
  }
`;
