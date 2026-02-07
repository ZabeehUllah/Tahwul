import { Box, Typography } from "@mui/material";

import { data } from "./progress-status-grid.constants";
import styles from "./progress-status-grid.styles";
import StatusLegend from "./components/status-legend/status-legend.component";
import ProgressCard from "./components/progress-card/progress-card.component";

export default function ProgressStatusGrid() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>Progress Status</Typography>

        <StatusLegend />
      </Box>

      <Box sx={styles.scrollContainer}>
        <Box sx={styles.grid}>
          {data.map((card) => (
            <ProgressCard key={card.title} {...card} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
