import { Box, CircularProgress, Typography } from "@mui/material";

import styles from "./planning-progress.styles";

const PlanningProgress = ({progress}: {progress: number}) => {
  return (
    <Box sx={styles.planningProgressWrapper}>
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.chipStyles}>
          <Typography sx={styles.chipStylesContent}>
            Strategy & Planning
          </Typography>
        </Box>
        <Typography sx={styles.textContentPrimary}>
          Digital Transformation Strategic Planning
        </Typography>
        <Typography sx={styles.textContentSecondary}>
          Develop comprehensive strategic plans for digital transformation
          aligned with organizational goals
        </Typography>
      </Box>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={progress}
          size={80}
          thickness={4}
          sx={{ color: "#1EA54E" }}
        />
        <Box sx={styles.circularProgress}>
          <Typography sx={styles.circularProgressContent}>
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PlanningProgress;
