import styled from 'styled-components';

// images
import face01 from '../../images/face/face01.png';
import face02 from '../../images/face/face02.png';
import face03 from '../../images/face/face03.png';
import face04 from '../../images/face/face04.png';
import face05 from '../../images/face/face05.png';
import face06 from '../../images/face/face06.png';

const Article = ({item}) => {
  // profile이 비어있으면 기본 프로필 사진 적용
  if (item.profile === '') {
    item.profile =
      'https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png';
  }

  var selectedFaceImage;
  var selectedFaceColor;

  //매너온도에 따른 아이콘 변화
  if (item.temp <= 30) {
    selectedFaceImage = face02;
    selectedFaceColor = '#081B2D';
  } else if (item.temp <= 36.2) {
    selectedFaceImage = face03;
    selectedFaceColor = '#0d3a65';
  } else if (item.temp <= 37.5) {
    selectedFaceImage = face04;
    selectedFaceColor = '#1561a9';
  } else if (item.temp <= 42) {
    selectedFaceImage = face05;
    selectedFaceColor = '#319e45';
  } else if (item.temp <= 52) {
    selectedFaceImage = face06;
    selectedFaceColor = '#df9100';
  } else {
    selectedFaceImage = face01;
    selectedFaceColor = '#de5d06';
  }

  return (
    <Wrapper>
      {/* 사용자 정보 */}
      <User>
        <div>
          {/* 사용자 정보 왼쪽 (닉네임, 장소) */}
          <div>
            <Profile src={item.profile} alt='profile' />
            <ul>
              <li>{item.user}</li>
              <li>{item.place}</li>
            </ul>
          </div>
          {/* 사용자 정보 오른쪽 (매너온도) */}
          <div>
            <ul style={{textAlign: 'right'}}>
              <span style={{color: selectedFaceColor}}>{item.temp}°C</span>
              <TempBar>
                <div
                  style={{
                    backgroundColor: selectedFaceColor,
                    width: `${item.temp}%`,
                  }}
                />
              </TempBar>
            </ul>
            <Face src={selectedFaceImage} alt='temperature' />
          </div>
        </div>
        <TempText>매너온도</TempText>
      </User>

      {/* 내용 */}
      <Content>
        <span className='title'>{item.title}</span>
        <span className='category-date'>
          {item.category} · {item.date}
        </span>
        <span className='price'>{item.price}원</span>
        <div>{item.content}</div>
        <span className='etc'>
          관심 {item.like} ∙ 채팅 {item.chat} ∙ 조회 {item.view}
        </span>
      </Content>
    </Wrapper>
  );
};

export default Article;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const User = styled.div`
  margin-top: 25px;
  margin-bottom: 11px;
  display: flex;
  flex-direction: column;
  width: 677px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      align-items: center;
      gap: 12px;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li:nth-child(1) {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: -0.6px;
        }

        li:nth-child(2) {
          font-size: 13px;
          line-height: 1.46;
          letter-spacing: -0.6px;
        }

        span {
          font-size: 16px;
          font-weight: bold;
          letter-spacing: -0.5px;
          color: #1561a9;
        }
      }
    }
  }
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Face = styled.img`
  width: 100%;
  height: 24px;
`;

const TempBar = styled.div`
  position: relative;
  margin-top: 8px;
  width: 100px;
  height: 4px;
  background-color: #e9ecef;
  border-radius: 10px;

  div {
    position: absolute;
    height: 100%;
    border-radius: 10px;
  }
`;

const TempText = styled.div`
  margin-left: auto;
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.6px;
  color: #868e96;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 677px;
  padding: 30px 0px;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;

  div {
    margin: 16px 0px;
    font-size: 17px;
    line-height: 1.6;
    letter-spacing: -0.6px;
    word-break: break-all;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.6px;
  }

  .category-date,
  .etc {
    font-size: 13px;
    line-height: 1.46;
    letter-spacing: -0.6px;
    color: #868e96;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.76;
    letter-spacing: -0.6px;
  }
`;
