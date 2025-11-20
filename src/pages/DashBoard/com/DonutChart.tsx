// 결제 수단을 구분하는 동글 차트, Nivo 라이브러리 사용

import { ResponsivePie } from "@nivo/pie";
import type { PayType } from "../../../types/payments";

interface DonutChartProps {
    data: Array<{
        id: string; //온라인
        value: number; //금액 합계
        percent: number; // 비율
        payType: PayType;
    }>
}

export default function DonutChart({ data } : DonutChartProps) {
  return (
    <div style={{ width: "350px", height: "350px" }}>
      <ResponsivePie
        data={data}
        innerRadius={0.65}  // 도넛 형태
        colors={["#80A6FF", "#9CF3D1", "#C8A4FF", "#FFB3DA", "#D4D4D4"]}
        padAngle={2}
        cornerRadius={4}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        tooltip={({ datum }) => (
          <div className="bg-white shadow-md p-3 rounded-xl text-sm">
            <div className="font-semibold">{datum.id}</div>
            <div>{datum.data.percent}%</div>
            <div>{datum.value.toLocaleString()} KRW</div>
          </div>
        )}
      />
    </div>
  )
}
