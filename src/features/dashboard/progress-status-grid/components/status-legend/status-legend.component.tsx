import { Box, Typography } from "@mui/material";

import styles from "./status-legend.styles";
import { statusColors } from "../../progress-status-grid.types";

const StatusLegend = () => {
  return (
    <Box sx={styles.legendWrapper}>
      {Object.entries(statusColors).map(([status, color]) => (
        <Box key={status} sx={styles.legendItem}>
          <Box sx={{ ...styles.legendDot, bgcolor: color }} />
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            {status}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default StatusLegend;
