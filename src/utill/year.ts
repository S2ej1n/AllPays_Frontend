// 년도별
import type { Payment } from "../types/payments";

export function filterYear(data: Payment[]) {
  const map: Record<number, number> = {};

  data.forEach(p => {
    if (p.status !== "SUCCESS") return;
    const date = new Date(p.paymentAt);
    const year = date.getFullYear();

    if (!map[year]) map[year] = 0;
    map[year] += Number(p.amount);
  });

  return Object.entries(map).map(([year, total]) => ({
    x: Number(year),
    y: total,
  }));
}

// 거래 성공 건수
export function countYear(data: Payment[]) {
  const count: Record<number, number> = {};

  data.forEach(p => {
    if (p.status !== "SUCCESS") return;
    const date = new Date(p.paymentAt);
    const year = date.getFullYear();
    
    if (!count[year]) count[year] = 0;
    count[year] += 1;
  });

  return count;
}

// 거래 건수
export function counttotalYear(data: Payment[]) {
  const count: Record<number, number> = {};

  data.forEach(p => {
    const date = new Date(p.paymentAt);
    const year = date.getFullYear();
    
    if (!count[year]) count[year] = 0;
    count[year] += 1;
  });

  return count;
}

// 해당 년도의 값만 가져오기 [도넛 차트를 위한 필터링 함수 제작]
export function filterYearData(data: Payment[]) {
  const thisYear = new Date().getFullYear();

  return data.filter(p => {
     if (p.status !== "SUCCESS") return false;
    const date = new Date(p.paymentAt);
    return date.getFullYear() === thisYear;
  });
}

export function filtertotalearData(data: Payment[]) {
  const thisYear = new Date().getFullYear();

  return data.filter(p => {
    const date = new Date(p.paymentAt);
    return date.getFullYear() === thisYear;
  });
}
