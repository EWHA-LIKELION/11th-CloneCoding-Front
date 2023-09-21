import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

//images
import icon1 from "../images/mannertemp/orangesmile.png";
import icon2 from "../images/mannertemp/yellowsmile.png";
import icon3 from "../images/mannertemp/greensmile.png";
import icon4 from "../images/mannertemp/bluesmile.png";
import icon5 from "../images/mannertemp/navybad.png";

const MannerTemp = ({ tempnum }) => {
  // 기본 색 및 아이콘 설정
  let tempColor = "#1561a9";
  let tempIconSrc = icon1;

  // 온도에 따른 단계별 설정
  if (tempnum <= 36.2) {
    tempColor = "#0d3a65 "; //남색
    tempIconSrc = icon5;
  } else if (tempnum <= 38) {
    tempColor = "#1561a9 "; // 20 이하일 때 파란색
    tempIconSrc = icon4;
  } else if (tempnum <= 42) {
    tempColor = "#329E46"; // 40 이하일 때 초록색
    tempIconSrc = icon3;
  } else if (tempnum <= 50) {
    tempColor = "#E6AA39"; // 60 이하일 때 노란색
    tempIconSrc = icon2;
  } else if (tempnum <= 100) {
    tempColor = "#de5d06"; // 80 이하일 때 주황
    tempIconSrc = icon1;
  }
  return (
    <Box>
      <Container>
        <div style={{ display: "column" }}>
          <TempNum style={{ color: tempColor }}>{tempnum}ºC</TempNum>
          <TempBar>
            <TempColorbar
              style={{ width: `${tempnum}%`, backgroundColor: tempColor }}
            />
          </TempBar>
        </div>
        <TempIcon src={tempIconSrc} />
      </Container>
      <Text style={{ textAlign: "right" }}> 매너온도</Text>
    </Box>
  );
};

export default MannerTemp;

// 매너온도

const Box = styled.section`
  width: 100px;
  padding-right: 36px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TempNum = styled.div`
  color: #1561a9;
  text-align: right;
  font-weight: 900;
`;

const TempBar = styled.div`
  width: 100px;
  background-color: #e9ecef;
  height: 4px;
  border-radius: 100px;
  position: relative;
  margin-top: 4px;

  cursor: pointer;
`;

const TempColorbar = styled.div`
  background-color: #1561a9;
  width: 33%;
  height: 4px;
  border-radius: 100px;
`;

const TempIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 7px;
`;

const Text = styled.div`
  position: absolute;
  right: 0;
  font-size: 12px;
  color: #929ea9;
  margin-top: 7px;
`;
