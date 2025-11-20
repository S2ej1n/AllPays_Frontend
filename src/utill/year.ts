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
