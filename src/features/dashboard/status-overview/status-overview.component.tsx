import { Grid, Paper, Typography, Box } from "@mui/material";

import { stats } from "./status-overview.constants";
import styles from "./status-overview.styles";

export default function StatsOverview() {
  return (
    <Grid container spacing={2}>
      {stats.map((stat, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 2 }} key={index}>
          <Paper elevation={0} sx={styles.card}>
            <Box sx={styles.cardContent}>
              <Box>
                <Typography variant="h4" sx={styles.value}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={styles.subText}>
                  {stat.sub}
                </Typography>
              </Box>

              <Box sx={styles.iconWrapper}>{stat.icon}</Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
