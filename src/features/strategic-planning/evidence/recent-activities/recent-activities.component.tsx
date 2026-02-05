import { Box, Divider, Typography } from "@mui/material";
import { RecentActivitiesData } from "../../DUMMY_DATA";
import styles from "./recent-activities.styles";

const RecentActivities = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>Recent Activities</Typography>

      <Box sx={styles.listWrapper}>
        {RecentActivitiesData.map((activity) => (
          <Box key={activity.id}>
            <Divider sx={styles.divider} />

            <Box sx={styles.itemWrapper}>
              <Box sx={styles.activityWrapper}>
                <Box sx={styles.bullet} />
                <Typography sx={styles.activityText}>{activity.activity}</Typography>
              </Box>

              <Typography sx={styles.timestampText}>{activity.timestamp}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecentActivities;
