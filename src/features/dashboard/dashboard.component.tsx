import { Box, Grid } from "@mui/material";
import TimelineSection from "../../components/ui/TimelineSection";
import StatsOverview from "../../components/ui/StatsOverview";
import ProgressStatusGrid from "../../components/ui/ProgressStatusGrid";
import RadialScoreChart from "../../components/ui/RadialScoreChart";
import PerformanceLeaders from "../../components/ui/PerformanceLeaders";
import PerformanceBarChart from "../../components/ui/PerformanceBarChart";
import RecentActivities from "../../features/strategic-planning/evidence/recent-activities/recent-activities.component";
import dashboardStyles from "./dashboard.styles";

const Dashboard = () => {
  return (
    <Box sx={dashboardStyles.container}>
      <Box sx={dashboardStyles.fullWidthBox}>
        <TimelineSection />
      </Box>

      <Box sx={dashboardStyles.fullWidthBox}>
        <StatsOverview />
      </Box>

      <Box sx={dashboardStyles.fullWidthBox}>
        <ProgressStatusGrid />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={dashboardStyles.radialChartWrapper()}>
          <RadialScoreChart
            title="Overall Compliance Score"
            score={65}
            subtext="Basic Standards 2025"
            color="#f44336"
            innerRadius="80%"
            barSize={20}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <PerformanceLeaders />
        </Grid>

        <Grid item xs={12} md={4} sx={dashboardStyles.recentActivitiesGrid}>
          <RecentActivities />
        </Grid>

        <Grid item xs={12} md={8}>
          <PerformanceBarChart />
        </Grid>

        <Grid item xs={12} md={4} sx={dashboardStyles.radialChartWrapper()}>
          <RadialScoreChart
            title="Audit Readiness"
            score={80}
            subtext="Readiness Level"
            color="#4caf50"
            innerRadius="80%"
            barSize={20}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
