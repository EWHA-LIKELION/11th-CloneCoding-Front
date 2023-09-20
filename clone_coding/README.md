## 11th CloneCoding Front
<hr/>
당근마켓 클론코딩

### 개발 기간
<hr/>
2023.09.10~2023.09.21

### 기술 스택
<hr/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white" height="28px"/>

### 폴더 구조 및 페이지 구성
<hr/>
📂 public
⎪ └─ index.html
📂 src
├─ 📂 _mock
⎪ ⎪ └─ productData.js            ▶︎ 상품의 목데이터 배열
├─ 📂 components
⎪ ⎪ └─ Header.js                 ▶︎ 상단 네비 바
⎪ ⎪ └─ Banner.js                 ▶︎ 제목과 부제목, 이미지가 들어간 배너
⎪ ⎪ └─ ImageSlide.js             ▶︎ 상세페이지에서 띄우는 이미지 슬라이더
⎪ ⎪ └─ ProductCard.js            ▶︎ 메인페이지에서 띄우는 중고거래 상품
⎪ ⎪ └─ ProductCard2.js           ▶︎ 상세페이지에서 띄우는 인기거래 상품
⎪ ⎪ └─ PopularProduct.js         ▶︎ ProductCard2가 포함된 인기상품 목록
├─ 📂 images //아이콘, 상품 이미지
⎪
├─ 📂 pages
⎪ ⎪ └─ MainPage.js               ▶︎ 중고거래 메인페이지
⎪ ⎪ └─ DetailPage.js             ▶︎ 중고거래 상세내페이지
├─ App.js
├─ index.js
├─ .gitignore
├─ package.json
└─ README.md


### 페이지 캡쳐
<hr/>

### Installation
```
$ git clone https://github.com/JiwonChoi0805/11th-CloneCoding-Front.git
$ cd clone_coding

$ npm i
$ npm i styled-components
$ npm install react-router-dom --save
```
