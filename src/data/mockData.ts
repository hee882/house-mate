// 실거래가 mock 데이터 - 국토교통부 실거래가 형식 기반
export interface Transaction {
  id: number;
  district: string; // 시군구
  dong: string; // 법정동
  apartmentName: string; // 아파트명
  area: number; // 전용면적 (㎡)
  floor: number;
  price: number; // 만원
  prevPrice: number | null; // 이전 거래가 (만원)
  dealDate: string; // 거래일
  buildYear: number;
}

export interface LandPermit {
  id: number;
  district: string;
  dong: string;
  landType: string; // 토지용도
  area: number; // ㎡
  price: number; // 만원
  permitDate: string;
  buyer: string;
  purpose: string;
}

export interface TrendData {
  month: string;
  gangnam: number;
  seocho: number;
  songpa: number;
  mapo: number;
  yongsan: number;
}

export const recentTransactions: Transaction[] = [
  { id: 1, district: "강남구", dong: "대치동", apartmentName: "래미안대치팰리스", area: 84.97, floor: 18, price: 298000, prevPrice: 285000, dealDate: "2026-02-10", buildYear: 2015 },
  { id: 2, district: "서초구", dong: "반포동", apartmentName: "아크로리버파크", area: 112.98, floor: 25, price: 520000, prevPrice: 498000, dealDate: "2026-02-10", buildYear: 2016 },
  { id: 3, district: "송파구", dong: "잠실동", apartmentName: "잠실엘스", area: 119.93, floor: 12, price: 268000, prevPrice: 255000, dealDate: "2026-02-09", buildYear: 2008 },
  { id: 4, district: "용산구", dong: "한남동", apartmentName: "한남더힐", area: 244.51, floor: 3, price: 780000, prevPrice: 750000, dealDate: "2026-02-09", buildYear: 2011 },
  { id: 5, district: "마포구", dong: "아현동", apartmentName: "마포래미안푸르지오", area: 84.59, floor: 22, price: 178000, prevPrice: 172000, dealDate: "2026-02-09", buildYear: 2014 },
  { id: 6, district: "강남구", dong: "압구정동", apartmentName: "현대아파트", area: 196.04, floor: 8, price: 620000, prevPrice: 580000, dealDate: "2026-02-08", buildYear: 1976 },
  { id: 7, district: "성동구", dong: "성수동", apartmentName: "트리마제", area: 100.98, floor: 30, price: 295000, prevPrice: 280000, dealDate: "2026-02-08", buildYear: 2017 },
  { id: 8, district: "강동구", dong: "둔촌동", apartmentName: "올림픽파크포레온", area: 84.98, floor: 35, price: 225000, prevPrice: 218000, dealDate: "2026-02-08", buildYear: 2024 },
  { id: 9, district: "서초구", dong: "잠원동", apartmentName: "신반포자이", area: 59.96, floor: 15, price: 245000, prevPrice: 238000, dealDate: "2026-02-07", buildYear: 2023 },
  { id: 10, district: "양천구", dong: "목동", apartmentName: "목동신시가지7단지", area: 95.04, floor: 10, price: 185000, prevPrice: 180000, dealDate: "2026-02-07", buildYear: 1986 },
  { id: 11, district: "과천시", dong: "별양동", apartmentName: "과천푸르지오써밋", area: 84.99, floor: 20, price: 195000, prevPrice: 188000, dealDate: "2026-02-07", buildYear: 2022 },
  { id: 12, district: "성남시 분당구", dong: "백현동", apartmentName: "판교푸르지오그랑블", area: 104.97, floor: 16, price: 220000, prevPrice: 215000, dealDate: "2026-02-06", buildYear: 2018 },
  { id: 13, district: "하남시", dong: "감일동", apartmentName: "감일푸르지오마크베르", area: 84.91, floor: 12, price: 98000, prevPrice: 95000, dealDate: "2026-02-06", buildYear: 2022 },
  { id: 14, district: "수원시 영통구", dong: "광교동", apartmentName: "광교자연앤힐스테이트", area: 84.98, floor: 18, price: 122000, prevPrice: 118000, dealDate: "2026-02-06", buildYear: 2012 },
  { id: 15, district: "고양시 덕양구", dong: "창릉동", apartmentName: "창릉신도시A1BL", area: 84.96, floor: 8, price: 85000, prevPrice: null, dealDate: "2026-02-05", buildYear: 2025 },
];

export const landPermits: LandPermit[] = [
  { id: 1, district: "강남구", dong: "삼성동", landType: "상업용지", area: 3200, price: 1850000, permitDate: "2026-02-10", buyer: "법인", purpose: "복합개발" },
  { id: 2, district: "용산구", dong: "한남동", landType: "주거용지", area: 1500, price: 980000, permitDate: "2026-02-10", buyer: "법인", purpose: "고급주택" },
  { id: 3, district: "서초구", dong: "서초동", landType: "상업용지", area: 2800, price: 1620000, permitDate: "2026-02-09", buyer: "법인", purpose: "오피스빌딩" },
  { id: 4, district: "성동구", dong: "성수동", landType: "준공업용지", area: 4500, price: 750000, permitDate: "2026-02-09", buyer: "법인", purpose: "지식산업센터" },
  { id: 5, district: "마포구", dong: "상암동", landType: "상업용지", area: 2100, price: 520000, permitDate: "2026-02-08", buyer: "법인", purpose: "미디어센터" },
  { id: 6, district: "송파구", dong: "문정동", landType: "상업용지", area: 1800, price: 890000, permitDate: "2026-02-08", buyer: "법인", purpose: "판매시설" },
  { id: 7, district: "강동구", dong: "고덕동", landType: "주거용지", area: 5200, price: 620000, permitDate: "2026-02-07", buyer: "법인", purpose: "공동주택" },
  { id: 8, district: "과천시", dong: "갈현동", landType: "주거용지", area: 8500, price: 1250000, permitDate: "2026-02-07", buyer: "법인", purpose: "재건축" },
  { id: 9, district: "성남시 분당구", dong: "정자동", landType: "상업용지", area: 1200, price: 480000, permitDate: "2026-02-06", buyer: "법인", purpose: "업무시설" },
  { id: 10, district: "하남시", dong: "교산동", landType: "주거용지", area: 12000, price: 920000, permitDate: "2026-02-06", buyer: "공공", purpose: "3기신도시" },
];

export const trendData: TrendData[] = [
  { month: "24.03", gangnam: 252000, seocho: 228000, songpa: 195000, mapo: 148000, yongsan: 215000 },
  { month: "24.06", gangnam: 258000, seocho: 235000, songpa: 202000, mapo: 152000, yongsan: 225000 },
  { month: "24.09", gangnam: 268000, seocho: 242000, songpa: 215000, mapo: 158000, yongsan: 238000 },
  { month: "24.12", gangnam: 275000, seocho: 248000, songpa: 228000, mapo: 165000, yongsan: 248000 },
  { month: "25.03", gangnam: 280000, seocho: 255000, songpa: 238000, mapo: 170000, yongsan: 258000 },
  { month: "25.06", gangnam: 285000, seocho: 260000, songpa: 242000, mapo: 172000, yongsan: 265000 },
  { month: "25.09", gangnam: 288000, seocho: 262000, songpa: 248000, mapo: 175000, yongsan: 270000 },
  { month: "25.12", gangnam: 292000, seocho: 268000, songpa: 255000, mapo: 176000, yongsan: 275000 },
  { month: "26.02", gangnam: 298000, seocho: 272000, songpa: 268000, mapo: 178000, yongsan: 280000 },
];

// 실시간 느낌을 위한 최근 거래 시간 데이터
export const recentTimes = [
  "방금 전", "2분 전", "5분 전", "12분 전", "18분 전",
  "25분 전", "32분 전", "45분 전", "1시간 전", "1시간 전",
  "2시간 전", "3시간 전", "4시간 전", "5시간 전", "어제",
];
