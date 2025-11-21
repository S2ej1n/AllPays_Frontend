// 메인 대시보드
import { useGetPayment } from "../../apis/payment"
import PeriodFilter from "./com/PeriodFilter";
import TotalCard from "./com/TotalCard";
import LineChart from "./com/LineChart";
import DonutChart from "./com/DonutPayTypeChart";
import { DonutLegend } from "./com/DonutPayTypeChart";
import StatusChart from "./com/StatusChart";
import { StatusLegend } from "./com/StatusChart";
import RankList from "./com/RankList";
import type { PayType, StatusType } from "../../types/payments";
import { filterWeek, filterMonth, filterYear, filterPayType, countMonth, countWeek, countYear,
  filterMonthData, filterWeekData, filterYearData, counttotalWeek, counttotalMonth, counttotalYear,
  filterStatusType, filtertotalWeekData, filtertotalMonthData, filtertotalearData
 } from "../../utill";
import { getThisWeek, getThisMonth, getThisYear } from "../../utill/getThisBla";
import { useFilterStore } from "../../store/filterStore";

export default function Dashboard() {
  const { data, isLoading, isError } = useGetPayment();
  const { period } = useFilterStore(); // 현재 필터링 값?

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;

  let totalAmount = 0;
  let totalCount = 0;
  let tCount = 0;
  let lineData: { x: string; y: number }[] = [];
  let donutData:{ id:PayType; value: number; percent: number; }[] = [];

  let statusData:{ id:StatusType; value: number; percent: number; }[] = [];

  let successRate = 0;

  // 필터링 함수로 빼서 정리해야할 것 같다.
  if (period === "WEEK") {
    const weekData = filterWeek(data ?? []);
    const weekCounts = countWeek(data ?? []);
    const weektotalCounts = counttotalWeek(data ?? []);
    const weekPayments =filterWeekData(data ?? []);
    const weektotalPayments =filtertotalWeekData(data ?? []);
    const thisWeek = getThisWeek();

     // 현재 주차가 없을 경우 값 추가
    if (!weekData.find(m => m.x === thisWeek)) {
      weekData.push({ x: thisWeek, y: 0 });
    }

    lineData = weekData.map(m => ({
      x: m.x,
      y: m.y,
    }));

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
    const monthPayments = filterMonthData(data?? []);
    const monthtotalPayments =filtertotalMonthData(data ?? []);
    lineData = monthData.map(m => ({
      x: `${m.x}월`,
      y: m.y,
    }));
    const thisMonth = getThisMonth();
    totalAmount = monthData.find(m => m.x === thisMonth)?.y ?? 0;
    totalCount = monthCounts[thisMonth - 1] ?? 0;
    tCount =  monthtotalCounts[thisMonth - 1] ?? 0;
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
    lineData = yearData.map(m => ({
      x: `${m.x}년`,
      y: m.y,
    }));
    const thisYear = getThisYear();
    totalAmount = yearData.find(m => m.x === thisYear)?.y ?? 0;
    totalCount = yearCounts[thisYear] ?? 0;
    tCount = yeartotalCounts[thisYear] ?? 0;
    donutData = filterPayType(yearPayments);
    statusData = filterStatusType(yeartotalPayments);

    successRate = tCount === 0 ? 0 : Number(((totalCount / tCount) * 100).toFixed(1));
  }

  return(
    <div>
      <PeriodFilter/>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <TotalCard title="총 매출" 
        value={`₩ ${totalAmount.toLocaleString()}`} />
        <TotalCard title="거래 성공 건수 / 거래 건수" 
        value={`${totalCount}건 / ${tCount}건`} />
      </div>

      <div className="bg-white p-5 mt-4 rounded-2xl shadow-sm border border-gray-300">
        <h2 className="font-bold mb-4">거래액 그래프</h2>
        <LineChart data={lineData} />
      </div>

      <section className="flex flex-col mt-4 bg-white p-6 rounded-2xl border border-gray-300 shadow-sm">
        <h2 className="font-bold mb-3 text-lg">결제 수단 현황</h2>
        <div className="flex flex-col gap-[2rem] [@media(min-width:886px)]:flex-row [@media(min-width:886px)]:items-center items-center">
          <div className="flex flex-col justify-center">
            <DonutChart data={donutData} />
            <DonutLegend data={donutData} />
          </div>
          <RankList data={donutData} />
        </div>
      </section>

      {/* 상태별로 그래프 */}
      <section className="mt-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex-col justify-center items-center bg-white p-6 rounded-2xl border border-gray-300 shadow-sm">
            <h2 className="font-bold mb-3 text-lg">결제 상태 분포</h2>
            <StatusChart data={statusData} />
            <StatusLegend data={statusData} />
          </div>

          <div className="flex-1">
            <div className="border bg-white p-6 rounded-2xl border-gray-300 shadow-sm">
              <p className="text-lg font-semibold mb-2">결제 성공률</p>
              <p className="text-4xl font-bold mb-4">
                {`${successRate}%`}
              </p>

              <div className="space-y-1 text-sm">
                <p>완료 {}건</p>
                <p>대기 {}건</p>
                <p>실패 {}건</p>
                <p>환불 {}건</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
