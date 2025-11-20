// 주별로 필터링하는 함수
import type { Payment } from "../types/payments";

// 참고 자료 함수 가져왔습니다.
function getWeekString(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 해당 달의 1일
  const firstDayOfMonth = new Date(year, month - 1, 1);
  // 이번 달 1일이 무슨 요일인지 (0: 일요일)
  const firstDayWeek = firstDayOfMonth.getDay();
  // 달의 몇 주차인지 계산
  const week = Math.ceil((firstDayWeek + day) / 7);

  return `${month}월 ${week}주차`;
}

// 주별 합계
// "paymentAt": "2025-11-01T00:10:00"
// "amount": "11000.00" -> 스트링 타입
export function filterWeek(data: Payment[]) {
  const map: Record<string, number> = {};

  data.forEach(p => {
    if (p.status !== "SUCCESS") return;
    const date = new Date(p.paymentAt);
    const weekKey = getWeekString(date);

    if (!map[weekKey]) map[weekKey] = 0;
    map[weekKey] += Number(p.amount);
  });

  return Object.entries(map).map(([week, total]) => ({
    x: week,
    y: total,
  }));
}

// 거래 건수
export function countWeek(data: Payment[]) {
  const count: Record<string, number> = {};

  data.forEach(p => {
    if (p.status !== "SUCCESS") return;
    const date = new Date(p.paymentAt);
    const weekKey = getWeekString(date); // "11월 2주차"
    
    if (!count[weekKey]) count[weekKey] = 0;
    count[weekKey] += 1;
  });

  return count;
}

// 해당 주 의 값만 가져오기 [도넛 차트를 위한 필터링 함수 제작]
export function filterWeekData(data: Payment[]) {
  const today = new Date();
 const thisWeekKey = getWeekString(today); // 오늘은 // "11월 2주차"

  return data.filter(p => {
    if (p.status !== "SUCCESS") return false;
    const weekKey = getWeekString(new Date(p.paymentAt)); // "11월 2주차"
    return weekKey === thisWeekKey;
  });
}