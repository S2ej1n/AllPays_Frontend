// 결제 수단 횟수 랭크 - 도넛차트에 귀속
import { chartColors } from "./DonutChart";
import type { DonutChartProps } from "./DonutChart";
import type { PayType } from "../../../types/payments";
import { PayTypeMapping } from "../../../types/payments";

export default function RankList({data} : DonutChartProps ) {
  return (
    <main className="flex flex-col gap-4">
      {data.map((item, index) => (
        // 전체를 묶는 박스
        <article key={item.id} 
            className="flex flex-col justify-between mb-4
            rank499:flex-row rank886:flex-col rank1205:flex-row">

          {/* 번호 + 이름 + 금액 */}
          <section className="flex items-center gap-4">
            {/* 순위 번호 */}
            <div className="w-9 h-9 rounded-lg bg-black text-white 
            flex items-center justify-center text-sm">
              {index + 1}
            </div>
            {/* 아이템 이름*/}
            <div className="w-[8rem]">
              <div className="font-semibold">
                {PayTypeMapping[item.id as PayType]}
              </div>
              <div className="text-gray-500 text-base">
                {item.value.toLocaleString()} KRW
              </div>
            </div>
          </section>

          <section className="flex items-center gap-3">
            {/* bar 그래프 */}
            <div className="w-40 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${item.percent}%`,
                  backgroundColor: chartColors[index],
                }}
              />
            </div>

            <div className="text-sm font-semibold px-3 py-1 rounded-lg">
              {item.percent}%
            </div>

          </section>
        </article>
      ))}
    </main>
  )
}
