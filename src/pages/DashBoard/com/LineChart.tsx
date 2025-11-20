// 거래 증감을 보여주는 LineChart, Nivo 라이브러리 사용

import { ResponsiveLine } from "@nivo/line";

interface LineChartProps {
  data: Array<{
    x: string; // 몇월
    y: number; // 돈
  }>;
}

export default function LineChart({ data }: LineChartProps) {
  return (
    <div style={{ width: "100%", height: "350px" }}>
      <ResponsiveLine
        data={[
          {
            id: "거래액",
            color: "#165af9",
            data,
          },
        ]}
        margin={{ top: 20, right: 40, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: false }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: "",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
        }}
        lineWidth={3}
        pointSize={6}
        pointColor="#fff"
        pointBorderWidth={2}
        pointBorderColor="#165af9"
        useMesh={true}
        colors={["#165af9"]}
      />
    </div>
  );
}
