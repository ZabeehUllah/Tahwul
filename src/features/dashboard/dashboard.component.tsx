import { Box, Grid } from "@mui/material";
import TimelineSection from "./timeline/timeline.component";
import StatsOverview from "./status-overview/status-overview.component";
import ProgressStatusGrid from "./progress-status-grid/progress-status-grid.component";
import RadialScoreChart from "./radial-score-chart/radial-score-chart.component";
import PerformanceLeaders from "./performance-leader/performance-leaders.component";
import RecentActivities from "../../components/ui/recent-activities/recent-activities.component";
import dashboardStyles from "./dashboard.styles";
import PerformanceBarChart from "./performance-bar-chart/performance-bar-chart.component";

const Dashboard = () => {
  return (
    <Box sx={dashboardStyles.container}>
      <Box sx={dashboardStyles.fullWidthBox}>
        <TimelineSection />
      </Box>

      <Box sx={dashboardStyles.fullWidthBox}>
        <StatsOverview />
      </Box>

      <Box sx={dashboardStyles.progressStatusGrid}>
        <ProgressStatusGrid />
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <RadialScoreChart
            title="Overall Compliance Score"
            score={65}
            subtext="Basic Standards 2025"
            color="#f44336"
            innerRadius="80%"
            barSize={20}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <PerformanceLeaders />
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
          sx={dashboardStyles.recentActivitiesGrid}
        >
          <RecentActivities />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <PerformanceBarChart />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <RadialScoreChart
            title="Audit Readiness"
            score={80}
            subtext="Readiness Level"
            color="#4caf50"
            innerRadius="80%"
            barSize={20}
            stats={[
              { value: 12, label: "Overdue Stds", color: "#1D3557" },
              { value: 5, label: "Missing Evidence", color: "#1D3557" },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
