import { Box, Typography } from "@mui/material";

import styles from "./timeline-dates.styles";
import type { TimelineDatesProps } from "../../timeline.types";

export default function TimelineDates({ steps, isMobile }: TimelineDatesProps) {
  return (
    <Box sx={styles.datesGrid(steps.length)}>
      {steps.map((step) => (
        <Typography
          key={step.label}
          sx={styles.dateText(isMobile)}
        >
          {step.date}
        </Typography>
      ))}
    </Box>
  );
}
