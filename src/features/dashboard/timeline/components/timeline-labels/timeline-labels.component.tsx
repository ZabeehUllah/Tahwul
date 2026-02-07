import { Box, Typography } from "@mui/material";

import styles from './timeline-labes.styles'
import type { TimelineLabelsProps } from "../../timeline.types";

export default function TimelineLabels({ steps, isMobile }: TimelineLabelsProps) {
  return (
    <Box sx={styles.labelsGrid(steps.length)}>
      {steps.map((step) => (
        <Typography
          key={step.label}
          sx={styles.labelText(isMobile)}
        >
          {step.label}
        </Typography>
      ))}
    </Box>
  );
}
