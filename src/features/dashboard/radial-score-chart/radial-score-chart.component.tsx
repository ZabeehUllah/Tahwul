import { Paper, Typography, Box } from "@mui/material";
import styles from "./radial-score-chart.styles";

import {
  DEFAULT_TOTAL,
  DEFAULT_COLOR,
  DEFAULT_INNER_RADIUS,
  DEFAULT_BAR_SIZE,
} from "./radial-score-chart.constants";
import type { RadialScoreChartProps } from "./radial-score-chart.types";
import CenterText from "../../../components/ui/center-text/center-text.component";
import RadialBarChartComponent from "../../../components/ui/radial-bar-chart/radial-bar-chart.component";

export default function RadialScoreChart({
  title,
  score,
  subtext,
  total = DEFAULT_TOTAL,
  color = DEFAULT_COLOR,
  innerRadius = DEFAULT_INNER_RADIUS,
  barSize = DEFAULT_BAR_SIZE,
  stats,
}: RadialScoreChartProps) {
  const data = [
    {
      name: "Score",
      value: score,
      fill: color,
    },
  ];

  return (
    <Paper elevation={0} sx={styles.root}>
      <Typography sx={styles.title}>{title}</Typography>

      <Box sx={styles.contentWrapper}>
        <Box sx={styles.chartWrapper}>
          <RadialBarChartComponent
            data={data}
            total={total}
            innerRadius={innerRadius}
            barSize={barSize}
            color={color}
          />

          <CenterText score={score} subtext={subtext} />
        </Box>

        {stats && (
          <Box sx={styles.statsWrapper}>
            {stats.map((stat, index) => (
              <Box key={index} sx={styles.statItem}>
                <Typography sx={styles.statValue(stat.color)}>
                  {stat.value}
                </Typography>
                <Typography sx={styles.statLabel}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Paper>
  );
}
