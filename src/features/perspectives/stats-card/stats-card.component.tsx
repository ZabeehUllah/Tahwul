import { Box, Typography } from "@mui/material";

import styles from "./stats-card.styles";

interface StatsCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
}

const StatsCard = ({ label, value, icon }: StatsCardProps) => {
  return (
    <Box sx={styles.statsCardWrapper}>
        {icon}
      <Box>
        <Typography sx={styles.value}>{value}</Typography>
        <Typography sx={styles.label}>{label}</Typography>
      </Box>
    </Box>
  );
};

export default StatsCard;
