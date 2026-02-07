import { Box, Typography } from "@mui/material";
import LeadersCardItem from "./leaders-card-item/leaders-card-item.coponent";
import styles from "./leaders.styles";

const LeadersSection = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Leaders</Typography>
      <LeadersCardItem />
    </Box>
  );
};

export default LeadersSection;
