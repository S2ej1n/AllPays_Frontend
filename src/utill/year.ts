// 년도별
import type { Payment } from "../types/payments";

export function filterYear(data: Payment[]) {
  const map: Record<number, number> = {};

  data.forEach(p => {
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

// 거래 건수
export function countYear(data: Payment[]) {
  const count: Record<number, number> = {};

  data.forEach(p => {
    const date = new Date(p.paymentAt);
    const year = date.getFullYear();
    
    if (!count[year]) count[year] = 0;
    count[year] += 1;
  });

  return count;
}