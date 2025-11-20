// 메인 대시보드
import { useGetPayment } from "../../apis/payment"
import PeriodFilter from "./com/PeriodFilter";
import TotalCard from "./com/TotalCard";
import LineChart from "./com/LineChart";
import DonutChart from "./com/DonutChart";
import { DonutLegend } from "./com/DonutChart";
import RankList from "./com/RankList";
import { filterWeek, filterMonth, filterYear, filterPayType } from "../../utill";
import { getThisMonth, getThisYear } from "../../utill/getThisBla";
import { useFilterStore } from "../../store/filterStore";

export default function Dashboard() {
  const { data, isLoading, isError } = useGetPayment();
  const { period } = useFilterStore(); // 현재 필터링 값?

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;

  const donutData = filterPayType(data??[]);

  let totalAmount = 0;
  let lineData: { x: string; y: number }[] = [];

  if (period === "WEEK") {

  }

  if (period === "MONTH") {
    const monthData = filterMonth(data ?? []);
    lineData = monthData.map(m => ({
      x: `${m.x}월`,
      y: m.y,
    }));
    const thisMonth = getThisMonth();
    totalAmount = monthData.find(m => m.x === thisMonth)?.y ?? 0;
  }

  if (period === "YEAR") {
    const yearData = filterYear(data ?? []);
    lineData = yearData.map(m => ({
      x: `${m.x}년`,
      y: m.y,
    }));
    const thisYear = getThisYear();
    totalAmount = yearData.find(m => m.x === thisYear)?.y ?? 0;
  }

  return(
    <div>
      <PeriodFilter/>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <TotalCard title="총 매출" 
        value={`₩ ${totalAmount.toLocaleString()}`} />
        <TotalCard title="거래 건수" value="99건" />
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
    </div>
  )
}
