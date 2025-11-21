// 기간별로 필터링하는 함수 (대시보드에서 떼왔습니다)
import type { Payment, PayType, StatusType } from "../types/payments";
import { filterWeek, filterMonth, filterYear, filterPayType, countMonth, countWeek, countYear,
  filterMonthData, filterWeekData, filterYearData, counttotalWeek, counttotalMonth, counttotalYear,
  filterStatusType, filtertotalWeekData, filtertotalMonthData, filtertotalearData
 } from "../utill";
import { getThisWeek, getThisMonth, getThisYear } from "../utill/getThisBla";

export function periodFilter(period: "WEEK" | "MONTH" | "YEAR", data: Payment[]) {
  let totalAmount = 0;
  let totalCount = 0;
  let tCount = 0;
  let lineData: { x: string; y: number }[] = [];
  let donutData:{ id:PayType; value: number; percent: number; }[] = [];
  let statusData:{ id:StatusType; value: number; percent: number; }[] = [];
  let successRate = 0;

  if (period === "WEEK") {
    const weekData = filterWeek(data ?? []);
    const weekCounts = countWeek(data ?? []);
    const weektotalCounts = counttotalWeek(data ?? []);
    const weekPayments =filterWeekData(data ?? []);
    const weektotalPayments =filtertotalWeekData(data ?? []);
    const thisWeek = getThisWeek();

    if (!weekData.find(m => m.x === thisWeek)) {
      weekData.push({ x: thisWeek, y: 0 });
    }

    lineData = weekData.map(m => ({ x: m.x, y: m.y }));

    totalAmount = weekData.find(m => m.x === thisWeek)?.y ?? 0;
    totalCount = weekCounts[thisWeek] ?? 0;
    tCount = weektotalCounts[thisWeek] ?? 0;

    donutData = filterPayType(weekPayments);
    statusData = filterStatusType(weektotalPayments);

    successRate = tCount === 0 ? 0 : Number(((totalCount / tCount) * 100).toFixed(1));
  }


  if (period === "MONTH") {
    const monthData = filterMonth(data ?? []);
    const monthCounts = countMonth(data ?? []);
    const monthtotalCounts = counttotalMonth(data ?? []);
    const monthPayments = filterMonthData(data ?? []);
    const monthtotalPayments = filtertotalMonthData(data ?? []);

    lineData = monthData.map(m => ({ x: `${m.x}월`, y: m.y }));

    const thisMonth = getThisMonth();

    totalAmount = monthData.find(m => m.x === thisMonth)?.y ?? 0;
    totalCount = monthCounts[thisMonth - 1] ?? 0;
    tCount = monthtotalCounts[thisMonth - 1] ?? 0;

    donutData = filterPayType(monthPayments);
    statusData = filterStatusType(monthtotalPayments);

    successRate = tCount === 0 ? 0 : Number(((totalCount / tCount) * 100).toFixed(1));
  }


  if (period === "YEAR") {
    const yearData = filterYear(data ?? []);
    const yearCounts = countYear(data ?? []);
    const yeartotalCounts = counttotalYear(data ?? []);
    const yearPayments = filterYearData(data ?? []);
    const yeartotalPayments = filtertotalearData(data ?? []);

    lineData = yearData.map(m => ({ x: `${m.x}년`, y: m.y }));

    const thisYear = getThisYear();

    totalAmount = yearData.find(m => m.x === thisYear)?.y ?? 0;
    totalCount = yearCounts[thisYear] ?? 0;
    tCount = yeartotalCounts[thisYear] ?? 0;

    donutData = filterPayType(yearPayments);
    statusData = filterStatusType(yeartotalPayments);

    successRate = tCount === 0 ? 0 : Number(((totalCount / tCount) * 100).toFixed(1));
  }

  return {
    lineData,
    totalAmount,
    totalCount,
    tCount,
    donutData,
    statusData,
    successRate,
  };
}
