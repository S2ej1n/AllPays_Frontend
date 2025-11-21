// 결제 상태를 보여주는 동글 차트, Nivo 라이브러리 사용
import { ResponsivePie } from "@nivo/pie";
import type { StatusType } from "../../../types/payments";
import { StatusTypeMapping } from "../../../types/payments";

export interface StatusChartProps {
    data: Array<{
        id: StatusType; //성공
        value: number; //금액 합계
        percent: number; // 비율
    }>;
}

export const chartColors = ["#ffdb63", "#52dd65", "#f98d8d", "#cfa4f5"];

export default function StatusChart({ data } : StatusChartProps) {
  return (
    <div className="w-full max-w-[20rem] h-[20rem] mx-auto">
      <ResponsivePie
        data={data}
        innerRadius={0.3}
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
                <span className="font-semibold text-base">
                  {StatusTypeMapping[datum.id as StatusType]}
                </span>
            </div>
            <div>{datum.data.percent}%</div>
            <div className="text-gray-500">{datum.value.toLocaleString()}₩</div>
          </div>
        )}
      />
    </div>
  )
}

export function StatusLegend({ data }: StatusChartProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4 px-6">
      {data.map((item, index) => (
        <div key={item.id} className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: chartColors[index] }}
          />
          <span className="text-sm text-gray-600">
            {StatusTypeMapping[item.id as StatusType]}
          </span>
        </div>
      ))}
    </div>
  );
}