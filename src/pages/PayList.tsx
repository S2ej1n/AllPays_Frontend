import { useMemo } from "react";
import { useGetPayment } from "../apis/payment";
import { useGetMerchantList } from "../apis/merchant";
import type { MerchantList } from '../types/merchant.ts';
import { PayTypeMapping, StatusTypeMapping, type Payment } from "../types/payments";

export function makeMerchantMap(list: MerchantList[]) {
  const map: Record<string, string> = {};

  list.forEach(m => {
    map[m.mchtCode] = m.mchtName;
  });

  return map;
}

export default function PayList() {
  const { data, isLoading, isError } = useGetPayment();
  const { data: merchants } = useGetMerchantList();

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러 발생!</div>;

  const merchantMap = useMemo(() => {
        if (!merchants) return {};
        return makeMerchantMap(merchants);
    }, [merchants]);

  return (
    <section className="bg-white mt-4 p-6 rounded-2xl shadow-sm border border-gray-300">
      <h2 className="font-bold mb-4 text-lg">거래 내역</h2>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left border-b bg-gray-50">
              <th className="p-3 text-sm font-semibold text-gray-600 w-24">날짜</th>
              <th className="p-3 text-sm font-semibold text-gray-600 w-36">가맹점</th>
              <th className="p-3 text-sm font-semibold text-gray-600 w-28">결제수단</th>
              <th className="p-3 text-sm font-semibold text-gray-600 w-32">금액</th>
              <th className="p-3 text-sm font-semibold text-gray-600 w-24">상태</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((payment: Payment) => {
              const date = new Date(payment.paymentAt);
              const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일`;

              return (
                <tr
                  key={payment.paymentCode}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 text-sm text-gray-700">{formattedDate}</td>

                  <td className="p-3 text-sm text-gray-600">
                    {merchantMap[payment.mchtCode] ?? "알 수 없음"}</td>

                  <td className="p-3 text-sm text-gray-600">
                    {PayTypeMapping[payment.payType]}
                  </td>

                  <td className="p-3 text-sm font-semibold">
                    {Number(payment.amount).toLocaleString()}원
                  </td>

                  <td
                    className={`p-3 text-xs font-bold rounded-md 
                      ${
                        payment.status === "SUCCESS"
                          ? "text-green-600"
                          : payment.status === "FAILED"
                          ? "text-red-500"
                          : payment.status === "CANCELLED"
                          ? "text-purple-500"
                          : "text-yellow-500"
                      }
                    `}
                  >
                    {StatusTypeMapping[payment.status]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
