import { Box } from "@mui/material";

import styles from "./timeline-bar.styles";
import type { TimelineBarProps } from "../../timeline.types";

export default function TimelineBar({ steps, activeIndex }: TimelineBarProps) {
  return (
    <Box sx={styles.timelineBarWrapper}>
      <Box sx={styles.timelineBarBackground} />
      <Box sx={styles.timelineBarActive(activeIndex, steps.length)} />

      <Box sx={styles.dotsGrid(steps.length)}>
        {steps.map((step, index) => {
          const isCompleted = index < activeIndex;
          const isActive = index === activeIndex;

          return (
            <Box key={step.label} sx={styles.dotWrapper}>
              <Box sx={styles.dot(isCompleted, isActive)}>
                {isActive && <Box sx={styles.innerDot} />}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
