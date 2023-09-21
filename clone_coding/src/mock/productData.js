//이미지 여러개인거 더 추가하기 + data에 이미지 항목 합치기
import pd1 from "../images/pdimage/pd1.png";
import pd2 from "../images/pdimage/pd2.png";
import pd3 from "../images/pdimage/pd3.png";
import pd4 from "../images/pdimage/pd4.png";
import pd5 from "../images/pdimage/pd5.png";
import pd6 from "../images/pdimage/pd6.png";
import pd7 from "../images/pdimage/pd7.png";
import pd8 from "../images/pdimage/pd8.png";
import pd9 from "../images/pdimage/pd9.png";
import pd10 from "../images/pdimage/pd10.png";
import pd11 from "../images/pdimage/pd11.png";
import pd12 from "../images/pdimage/pd12.png";
import pd13 from "../images/pdimage/pd13.png";
import pd14 from "../images/pdimage/pd14.png";
import pd15 from "../images/pdimage/pd15.png";
import pd16 from "../images/pdimage/pd16.png";
import pd17 from "../images/pdimage/pd17.png";
import pd18 from "../images/pdimage/pd18.png";
import pd18_1 from "../images/pdimage/pd18_1.png";
import pd19 from "../images/pdimage/pd19.png";
import pd20 from "../images/pdimage/pd20.png";
import pd20_1 from "../images/pdimage/pd20_1.png";
import pd21 from "../images/pdimage/pd21.png";
import pd22 from "../images/pdimage/pd22.png";
import pd23 from "../images/pdimage/pd23.png";
import pd24 from "../images/pdimage/pd24.png";
import pd24_1 from "../images/pdimage/pd24_1.png";
import pd25 from "../images/pdimage/pd25.png";
import pd26 from "../images/pdimage/pd26.png";
import pd27 from "../images/pdimage/pd27.png";
import pd28 from "../images/pdimage/pd28.png";
import pd29 from "../images/pdimage/pd29.png";
import pd30 from "../images/pdimage/pd30.png";
export const productData = [
  {
    id: 1,
    title: "먹태깡 팔아요",
    image: [pd1],
    price: "1000원",
    place: "경남 진주시 초전동",
    like: "관심 11 · 채팅 45",
    username: "로얄",
    category: "가공식품",
    when: "5시간 전",
    info: "먹태깡 한봉에 1000원",
    view: "조회 34회",
    temp: "37.4",
  },

  {
    id: 2,
    title: "호스",
    image: [pd2],
    price: "3000원",
    place: "대전 서구 도안동",
    like: "관심 9 · 채팅 10",
    username: "뚱이",
    category: "생활가전",
    when: "2시간 전",
    info: "16mm투명호스 새제품입니다.",
    view: "· 조회 180",
    temp: "37.4",
  },
  {
    id: 3,
    title: "미니 냉장고",
    image: [pd3],
    price: "35000원",
    place: "광주 서구 화정1동",
    like: "관심 7 · 채팅 10",
    username: "사고뭉치비글",
    category: "생활가전",
    when: "1시간 전",
    info: `냉장 상태좋아요
    전체적 깨끗합니다
    택배안되고요
    가벼운 기스 찍힘 사용감 있습니다`,
    view: "· 조회 150",
    temp: "37.4",
  },
  {
    id: 4,
    title: "화분 판매합니다",
    image: [pd4],
    price: "300000원",
    place: "광주 서구 화정동",
    like: "관심 11 · 채팅 45",
    username: "자연송이",
    category: "식물",
    when: "3일전",
    info: "가게 정리합니다. 11개 정도 있습니다.",
    view: "· 조회 706",
    temp: "37.4",
  },
  {
    id: 5,
    title: "아이폰14 프로맥스 256기가",
    image: [pd5],
    price: "990000원",
    place: "인천 남동구 논현1동",
    like: "관심 57 · 채팅 108",
    username: "목달수",
    category: "디지털기기",
    when: "2일전",
    info: "플립 5로 바꾸면서 판매하게 됐습니다.",
    view: "· 조회 253",
    temp: "37.4",
  },
  {
    id: 6,
    title: "스벅 기프티콘",
    image: [pd6],
    price: "10000원",
    place: "부산 해운대구 우동",
    like: "관심 6 · 채팅 23",
    username: "신평",
    category: "기타 중고물품",
    when: "4시간 전",
    info: "스벅 기프티콘 판매",
    view: "· 조회 30",
    temp: "37.4",
  },
  {
    id: 7,
    title: "스트라이더 밸런스바이크",
    image: [pd7],
    price: "20000원",
    place: "경기도 안산시 단원구 초지동",
    like: "관심 3 · 채팅 6",
    username: "제임스",
    category: "유아동",
    when: "2일전",
    info: `직거래만 가능
    구입 확정 되신 분만 연락주십시요`,
    view: "· 조회 240",
    temp: "37.4",
  },
  {
    id: 8,
    title: "샤넬 백팩",
    image: [pd8],
    price: "340000원",
    place: "서울 종로구 평창동",
    like: "관심 69 · 채팅 22",
    username: "연제",
    category: "여성잡화",
    when: "2일전",
    info: `구매했으나 아끼기만 해서 판매
    에누리 답장 안함`,
    view: "· 조회 582",
    temp: "37.4",
  },
  {
    id: 9,
    title: "구찌 홀스빗 여성가방",
    image: [pd9],
    price: "380000원",
    place: "경기도 평택시 비전2동",
    like: "관심 21 · 채팅 9",
    username: "너대개낯설다",
    category: "여성잡화",
    when: "5일전",
    info: "구찌 홀스빗 1955 미니백 판매합니다",
    view: "1407",
    temp: "37.4",
  },
  {
    id: 10,
    title: "필리핀 페소",
    image: [pd10],
    price: "500000원",
    place: "부산 연제구 연산제5동",
    like: "관심 1 · 채팅 10",
    username: "맹인거래",
    category: "기타 중고물품",
    when: "4일전",
    info: "1000페소 19장 5페소 1장",
    view: "491",
    temp: "37.4",
  },
  {
    id: 11,
    title: "아더에러x자라 맨투맨",
    image: [pd11],
    price: "20000원",
    place: "서울 용산구 이태원동",
    like: "관심 4 · 채팅 4",
    username: "당근하자",
    category: "여성의류",
    when: "12시간 전",
    info: "도매가에 팔아요 새제품입니다",
    view: "· 조회 187",
    temp: "37.4",
  },
  {
    id: 12,
    title: "스팸 8호",
    image: [pd12],
    price: "18000원",
    place: "경기도 고양시 일산동구 식사동",
    like: "관심 5 · 채팅 7",
    username: "푸른하늘",
    category: "가공식품",
    when: "6시간 전",
    info: "스팸8호 선물세트입니다",
    view: "· 조회 275",
    temp: "37.4",
  },
  {
    id: 13,
    title: "쌀 필요하신분 10K 오전 9시까지 오세요",
    image: [pd13],
    price: "8000원",
    place: "사하구 괴정제 4동",
    like: "관심 5 · 채팅 25",
    username: "슈",
    category: "가공식품",
    when: "4시간 전",
    info: "도정년 23년4월11일",
    view: "· 조회 1000",
    temp: "41.4",
  },
  {
    id: 14,
    title: "추피의 생활이야기(81권)",
    image: [pd14],
    price: "90000원",
    place: "남구 달동",
    like: "관심 4 · 채팅 9",
    username: "불꽃레인저",
    category: "유아도서",
    when: "4시간 전",
    info: `본권 71권 
    낱말놀이책 10권
    세이펜가능합니다.
    포스터, 스티커, 공 (구성품) 사용 안 했어요!
    책만 깨끗히 읽었어요^^`,
    view: "· 조회 167",
    temp: "40.4",
  },
  {
    id: 15,
    title: "카놀라유 기름",
    image: [pd15],
    price: "10000원",
    place: "북구 덕천제3동",
    like: "관심 4 · 채팅 6",
    username: "불꽃레인저",
    category: "가공식품",
    when: "1일 전",
    info: `선물받은게 너무 많아서 올립니다
    5개 만원에 드려요
    유효기간 넉넉합니다`,
    view: "· 조회 241",
    temp: "37.2",
  },
  {
    id: 16,
    title: "로렉스남자시계",
    image: [pd16],
    price: "20000원",
    place: "동래구 사직제2동",
    like: "관심 5 · 채팅 13",
    username: "키큰언냐",
    category: "남성패션/잡화",
    when: "5시간 전",
    info: `로렉스 진품은아닌데
    비싸게 샀어요.
    밧데리만 갈면되구요~
    단단하고 진품같아
    보여요,부담없이 사용하실분
    쳇주세요~~`,
    view: "· 조회 694",
    temp: "50.2",
  },
  {
    id: 17,
    title: "아이폰 12 미니 64GB 팔아요",
    image: [pd17],
    price: "100000원",
    place: "노원구 중계동",
    like: "관심 8 · 채팅 14",
    username: "알뜰살뜰하게",
    category: "디지털기기",
    when: "11시간 전",
    info: `아이폰 12 미니 64GB 팔아요
    배터리 성능 최대치 78% 입니다
    잔기스 심한건 6개 있습니다 사진에 있어요
    언어는 한국어로 바꿔서 드려요
    액정에 금간건 없어요
    장소는 노원 양지근린공원 입니다`,
    view: "· 조회 211",
    temp: "39.1",
  },
  {
    id: 18,
    title: "맛있는 두유 팝니다",
    image: [pd18, pd18_1],
    price: "6000원",
    place: "관악구 낙성대동",
    like: "관심 20 · 채팅 28",
    username: "나기",
    category: "디지털기기",
    when: "1일 전",
    info: `맛있는 두유 팔아요
    3통 샀는데 결혼해서 자취방 옮길 때 까지
    다 못 먹을 거 같아서 팔아요
    유통기한은 널널해요`,
    view: "· 조회 281",
    temp: "36.5",
  },
  {
    id: 19,
    title: "보리굴비",
    image: [pd19],
    price: "5000원",
    place: "남양주시 별내동",
    like: "관심 20 · 채팅 28",
    username: "보리",
    category: "가공식품",
    when: "1일 전",
    info: `보리굴비 좋아하시나요?
    추석 선물로 보리굴비가 너무 많이 들어왔어요.
    개당 이케아 지퍼백으로 포장해서 냉동보관하고 있습니다.
    살이 통통합니다.
    10개만 가져가세요~`,
    view: "· 조회 416",
    temp: "44.6",
  },
  {
    id: 20,
    title: "루이비통 가방",
    image: [pd20, pd20_1],
    price: "50000원",
    place: "서구 내방동",
    like: "관심 13 · 채팅 12",
    username: "daldal",
    category: "기타 중고물품",
    when: "1일 전",
    info: "루이비통 가방 가로50cm 세로 20 높이23 깨끗합니다 쓰실분 가져가세요",
    view: "· 조회 1234",
    temp: "93.4",
  },
  {
    id: 21,
    title: "실리트냄비세트 판매합니다",
    image: [pd21],
    price: "10000원",
    place: "용인시 수지고 동천동",
    like: "관심 8 · 채팅 8",
    username: "연두",
    category: "생활/주방",
    when: "12시간 전",
    info: `실리트 냄비 4종 세트입니다
    가장 큰 냄비는 지름25 높이 10, 중간 사이즈 냄비는 지름 21높이 12, 나머지 작은 사이즈 2개는 지름17 높이7,5 입니다
    사용감있지만 튼튼하고 쓰임새가 다양합니다 실리트 다른 세트 구매하게되어 판매합니다`,
    view: "· 조회 351",
    temp: "39.2",
  },
  {
    id: 22,
    title: "엘지 건조기 9kg",
    image: [pd22],
    price: "100000원",
    place: "전주시 덕진구 송천2동",
    like: "관심 8 · 채팅 14",
    username: "곤이",
    category: "생활가전",
    when: "6일 전",
    info: `이사 가면서
    사용하던 건조기
    팝니다
    직접 가지러 오셔야 하구요
    오늘 아침까지 잘 사용하고 있네요~^^`,
    view: "· 조회 451",
    temp: "36.2",
  },
  {
    id: 23,
    title: "(추석선물세트) 청도반건시 새상품",
    image: [pd23],
    price: "20000원",
    place: "동작구 흑석동",
    like: "관심 3 · 채팅 4",
    username: "연진이네",
    category: "가공식품",
    when: "6일 전",
    info: `국내산 감 100%
    금일 수령 후 냉동 보관중
    직거래 중앙대 부근
    비대면 거래 선호
    택배 가능`,
    view: "· 조회 195",
    temp: "36.5",
  },
  {
    id: 24,
    title: "코스트코 고릴라렉 5단",
    image: [pd24, pd24_1],
    price: "35000원",
    place: "대평동",
    like: "관심 4 · 채팅 8",
    username: "다쁘네",
    category: "가구/인테리어",
    when: "6일 전",
    info: `코스트코에서 직접 구매한 5단 고릴라렉입니다.
    이사가면서 시세보다 싸게 내놓아요.
    빠른거래, 쿨거래 환영합니다.
    24일에 분해해서 1층까지 내려드릴수 있어요.
    아니면 집 앞에서 가져가셔야해요.`,
    view: "· 조회 176",
    temp: "41.1",
  },
  {
    id: 25,
    title: "코스트코 고릴라렉 5단",
    image: [pd25],
    price: "35000원",
    place: "대평동",
    like: "관심 4 · 채팅 8",
    username: "다쁘네",
    category: "가구/인테리어",
    when: "6일 전",
    info: `한샘 모모로 옷장,베이비장 세트입니다.
    사이즈 : 60x45x높이 115cm, 2개
    구성품은 실사 사진 확인바랍니다.`,
    view: "· 조회 216",
    temp: "68.1",
  },
  {
    id: 26,
    title: "야마토cg270 4행정 예초기",
    image: [pd26],
    price: "50000원",
    place: "은평구 신사동",
    like: "관심 1 · 채팅 6",
    username: "지세포개미",
    category: "가구/인테리어",
    when: "4일 전",
    info: `이제 벌초를 안하게 되어서 팝니다
    가솔린주입하여 사용하는 예초기입니다`,
    view: "· 조회 416",
    temp: "41.4",
  },
  {
    id: 27,
    title: "여수 햇멸치 박스포함1.7키로",
    image: [pd27],
    price: "30000원",
    place: "성동구 왕십리도선동",
    like: "관심 20 · 채팅 22",
    username: "시골집",
    category: "가공식품",
    when: "1일 전",
    info: `어제 언니가 햇멸치나왔다구
    사서 보내셨는데요
    저는 아직 있어서요
    선물하셔도 좋을것같아요 김치냉장고 보관중
    4~5센치 되는거 같아요
    필요하신분.5시30분이후가능합니다
    반품.환불어렵습니다`,
    view: "· 조회 599",
    temp: "48.4",
  },
  {
    id: 28,
    title: "하만카돈 오닉스 블루투스 스피커 입니다.",
    image: [pd28],
    price: "50000원",
    place: "화성시 반송동",
    like: "관심 27 · 채팅 14",
    username: "마이크23",
    category: "디지털기기",
    when: "13시간 전",
    info: `하만카돈 오닉스 블루투스 스피커 입니다.
    산지 얼마 안돼서 큰집으로 이사를 했고
    이후 사용한적 없습니다.
    다시 블루투스 스피커 사용하고자 했는데,
    집안 인테리어와 어울리지 않아 싸게 처분합니다.
    (구매가 187000원)`,
    view: "· 조회 199",
    temp: "38.4",
  },
  {
    id: 29,
    title: "위니아 제습기 15리터 팝니다",
    image: [pd29],
    price: "30000원",
    place: "안성시 공도읍",
    like: "관심 5 · 채팅 10",
    username: "슬슬봄",
    category: "디지털기기",
    when: "1일 전",
    info: `2016년도 구매 했고
    제조일은 2013,12월이라고 되어 있네요
    외면상 기스와 색바램은 있지만
    고장없이 잘 썻어요~`,
    view: "· 조회 312",
    temp: "38.4",
  },
  {
    id: 30,
    title: "엔틱 웨건",
    image: [pd30],
    price: "30000원",
    place: "안산시 상록구 사이동",
    like: "관심 5 · 채팅 10",
    username: "직거래",
    category: "가구/인테리어",
    when: "5일 전",
    info: "엔틱 웨건 상태좋습니다",
    view: "· 조회 652",
    temp: "36.8",
  },
];
