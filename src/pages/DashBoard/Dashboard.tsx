// 메인 대시보드
import { useGetPayment } from "../../apis/payment"
import PeriodFilter from "./PeriodFilter";

export default function Dashboard() {
  const { data, isLoading, isError } = useGetPayment();

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;

  return(
    <div>
      <PeriodFilter/>
      
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
