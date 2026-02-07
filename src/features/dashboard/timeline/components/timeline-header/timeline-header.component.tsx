import { Box, Typography } from "@mui/material";

import CaretDown from "../../../../../assets/caretDownIcon";
import styles from "./timeline-header.styles";

export default function TimelineHeader() {
  return (
    <Box sx={styles.header}>
      <Typography sx={styles.title}>Project Timeline</Typography>
      <Box sx={styles.yearSelector}>
        2026 <CaretDown />
      </Box>
    </Box>
  );
}
