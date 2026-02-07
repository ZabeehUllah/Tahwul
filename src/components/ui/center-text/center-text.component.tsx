import { Box, Typography } from "@mui/material";

import styles from "./center-text.styles";

const CenterText = ({
  score,
  subtext,
}: {
  score: number;
  subtext: string;
}) => {
  return (
    <Box sx={styles.centerText}>
      <Typography variant="h3" sx={styles.percentage}>
        {score}%
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {subtext}
      </Typography>
    </Box>
  );
};

export default CenterText;
