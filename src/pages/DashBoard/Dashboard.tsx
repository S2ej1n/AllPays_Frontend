// 메인 대시보드
import { useGetPayment } from "../../apis/payment"
import PeriodFilter from "./com/PeriodFilter";
import TotalCard from "./com/TotalCard";

export default function Dashboard() {
  const { data, isLoading, isError } = useGetPayment();

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;

  return(
    <div>
      <PeriodFilter/>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <TotalCard title="총 매출" value="₩ 124,253,535" />
        <TotalCard title="거래 건수" value="99건" />
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
