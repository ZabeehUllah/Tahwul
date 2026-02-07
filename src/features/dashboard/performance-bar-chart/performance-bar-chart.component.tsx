import { Paper, Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import {
  paperSx,
  headerSx,
  titleSx,
  chartContainerSx,
  tooltipStyle,
  tooltipCursorStyle,
  xAxisTickStyle,
} from "./performance-bar-chart.styles";
import { data } from "./performance-bar-chart.constants";

export default function PerformanceBarChart() {
  return (
    <Paper elevation={0} sx={paperSx}>
      <Box sx={headerSx}>
        <Typography sx={titleSx}>12-Month Performance</Typography>
      </Box>

      <Box sx={chartContainerSx}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={xAxisTickStyle}
              dy={10}
            />
            <Tooltip cursor={tooltipCursorStyle} contentStyle={tooltipStyle} />
            <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={36}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="#2196f3"
                  fillOpacity={entry.value < 60 ? 0.3 : 1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
