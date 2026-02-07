import { Paper, useMediaQuery } from "@mui/material";
import styles from "./timeline.styles";
import { steps } from "./timeline.constants";

import TimelineHeader from "./components/timeline-header/timeline-header.component";
import TimelineBar from "./components/timeline-bar/timeline-bar.component";
import TimelineDates from "./components/timeline-dates/timeline-dates.component";
import TimelineLabels from "./components/timeline-labels/timeline-labels.component";

export default function TimelineSection() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const activeIndex = steps.findIndex((step) => step.status === "active");

  return (
    <Paper elevation={0} sx={styles.root}>
      <TimelineHeader />

      <TimelineBar
        steps={steps}
        activeIndex={activeIndex}
      />

      <TimelineDates
        steps={steps}
        isMobile={isMobile}
      />

      <TimelineLabels
        steps={steps}
        isMobile={isMobile}
      />
    </Paper>
  );
}
