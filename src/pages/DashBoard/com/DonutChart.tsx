// 결제 수단을 구분하는 동글 차트, Nivo 라이브러리 사용
import { ResponsivePie } from "@nivo/pie";
import type { PayType } from "../../../types/payments";

export interface DonutChartProps {
    data: Array<{
        id: string; //온라인
        value: number; //금액 합계
        percent: number; // 비율
        payType: PayType;
    }>;
}

export const chartColors = ["#5f8df6", "#9cf3a8", "#c9abf6", "#FFB3DA", "#D4D4D4"];

export default function DonutChart({ data } : DonutChartProps) {
  return (
    <div className="w-full max-w-[20rem] h-[25rem] mx-auto">
      <ResponsivePie
        data={data}
        innerRadius={0.4}
        activeOuterRadiusOffset={8} // 마우스 hover
        arcLinkLabelsSkipAngle={6}
        colors={chartColors}
        padAngle={1}
        cornerRadius={1}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        // 마우스 올렸을시 뜨는 칸
        tooltip={({ datum }) => (
          <div className="bg-white shadow-md p-2 px-4 rounded-xl text-sm w-[7rem]">
            <div className="flex items-center gap-2">
                <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: datum.color }}
                />
                <span className="font-semibold text-base">{datum.id}</span>
            </div>
            <div>{datum.data.percent}%</div>
            <div className="text-gray-500">{datum.value.toLocaleString()}₩</div>
          </div>
        )}
      />
    </div>
  )
}

export function DonutLegend({ data }: DonutChartProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-6">
      {data.map((item, index) => (
        <div key={item.id} className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: chartColors[index] }}
          />
          <span className="text-sm text-gray-600">{item.id}</span>
        </div>
      ))}
    </div>
  );
}