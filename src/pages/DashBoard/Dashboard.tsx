// 메인 대시보드
import { useGetPayment } from "../../apis/payment"
import PeriodFilter from "./com/PeriodFilter";
import TotalCard from "./com/TotalCard";
import LineChart from "./com/LineChart";
import DonutChart from "./com/DonutChart";
import { DonutLegend } from "./com/DonutChart";
import RankList from "./com/RankList";
import type { PayType } from "../../types/payments";

export default function Dashboard() {
  const { data, isLoading, isError } = useGetPayment();

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;

  // 데이터 계산 함수 만들고 월 자동으로 나오게 할것
  const monthData = [
    { x: "1월",  y: 8000 },
    { x: "2월",  y: 12000 },
    { x: "3월",  y: 2000 },
    { x: "6월",  y: 31000 },
    { x: "7월",  y: 28000 },
    { x: "8월",  y: 52000 },
    { x: "9월",  y: 0 },
    { x: "10월", y: 2000 },
    { x: "11월", y: 7000 },
    { x: "12월", y: 6500 },
  ];

  // 매핑되도록 할것
  const donutData = [
    {
    id: "온라인",
    value: 245600,
    percent: 53.2,
    payType: "ONLINE" as PayType,
    },
    {
      id: "단말기",
      value: 122000,
      percent: 26.4,
      payType: "DEVICE" as PayType,
    },
    {
      id: "모바일",
      value: 48000,
      percent: 10.4,
      payType: "MOBILE" as PayType,
    },
    {
      id: "가상계좌",
      value: 27000,
      percent: 5.9,
      payType: "VACT" as PayType,
    },
    {
      id: "정기결제",
      value: 16000,
      percent: 3.5,
      payType: "BILLING" as PayType,
    },
  ]

  return(
    <div>
      <PeriodFilter/>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <TotalCard title="총 매출" value="₩ 124,253,535" />
        <TotalCard title="거래 건수" value="99건" />
      </div>

      <div className="bg-white p-5 mt-4 rounded-2xl shadow-sm border border-gray-300">
        <h2 className="font-bold mb-4">거래액 그래프</h2>
        <LineChart data={monthData} />
      </div>

      <section className="flex flex-col mt-4 bg-white p-6 rounded-2xl border border-gray-300 shadow-sm">
        <h2 className="font-bold mb-3 text-lg">결제 수단 현황</h2>
        <div className="flex flex-col gap-[2rem]
        [@media(min-width:886px)]:flex-row 
        [@media(min-width:886px)]:items-center items-center">
          <div className="flex flex-col justify-center">
            <DonutChart data={donutData} />
            <DonutLegend data={donutData} />
          </div>
          <RankList data={donutData} />
        </div>
      </section>

      {/* <ul>
        {data?.map((payment) => (
          <li key={payment.paymentCode}>
            {payment.amount}원
          </li>
        ))}
      </ul> */}
    </div>
  )
}
