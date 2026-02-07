import { Box, Typography } from "@mui/material";
import styles from "./progress-card.styles";
import Subsection from "../sub-section/sub-section.component";
import type { ProgressCardProps } from "../../progress-status-grid.types";

const ProgressCard = ({
  title,
  percentage,
  headerColor,
  subsections,
}: ProgressCardProps) => {
  return (
    <Box sx={styles.card}>
      <Box sx={{ ...styles.cardHeader, bgcolor: headerColor }}>
        <Typography sx={styles.cardTitle}>{title}</Typography>
        <Typography sx={styles.percentage}>{percentage}</Typography>
      </Box>

      <Box sx={styles.body}>
        {subsections.map((sub) => (
          <Subsection key={sub.heading} sub={sub} />
        ))}
      </Box>
    </Box>
  );
};

export default ProgressCard;
