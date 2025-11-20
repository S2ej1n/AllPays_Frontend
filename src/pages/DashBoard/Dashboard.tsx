// 메인 대시보드
import { useGetPayment } from "../../apis/payment"
import PeriodFilter from "./com/PeriodFilter";
import TotalCard from "./com/TotalCard";
import LineChart from "./com/LineChart";

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
