// 메인 대시보드
import { useGetPayment } from "../../apis/payment"
import PeriodFilter from "./com/PeriodFilter";
import TotalCard from "./com/TotalCard";
import LineChart from "./com/LineChart";
import DonutChart from "./com/DonutChart";
import { DonutLegend } from "./com/DonutChart";
import RankList from "./com/RankList";
import { filterMonth, filterPayType } from "../../utill";
import { getThisMonth } from "../../utill/getThismonth";

export default function Dashboard() {
  const { data, isLoading, isError } = useGetPayment();

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;

  // [달 차트] : 객체 키를 x, y 라고 통일해야 오류 안남
  const monthData = filterMonth(data ?? []);
  const lineData = monthData.map(m => ({
    x: `${m.x}월`,
    y: m.y,
  }));
  const thisMonth = getThisMonth();
  const thisMonthTotal = monthData.find(m => m.x === thisMonth)?.y ?? 0;

  const donutData = filterPayType(data??[]);

  return(
    <div>
      <PeriodFilter/>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <TotalCard title="총 매출" 
        value={`₩ ${thisMonthTotal.toLocaleString()}`} />
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
