import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import type { RadialBarChartProps } from "./radial-bar-chart.types";

export default function RadialBarChartComponent({
  data,
  total,
  innerRadius,
  barSize,
  color,
}: RadialBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="70%"
        innerRadius={innerRadius}
        outerRadius="100%"
        barSize={barSize}
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, total]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          dataKey="value"
          cornerRadius={10}
          fill={color}
          background={{ fill: "#f5f5f5" }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
