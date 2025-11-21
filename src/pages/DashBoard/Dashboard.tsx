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
import { periodFilter } from "../../utill/periodFilter";
import { useFilterStore } from "../../store/filterStore";

export default function Dashboard() {
  const { data, isLoading, isError } = useGetPayment();
  const { period } = useFilterStore(); // 현재 필터링 값?

  const { lineData, totalAmount, totalCount, tCount, donutData, statusData, successRate} 
  = periodFilter(period, data ?? []);

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;

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
