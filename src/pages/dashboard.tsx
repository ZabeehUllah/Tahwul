import { Box, Grid } from "@mui/material";
import TimelineSection from "../components/ui/TimelineSection";
import StatsOverview from "../components/ui/StatsOverview";
import ProgressStatusGrid from "../components/ui/ProgressStatusGrid";
import RadialScoreChart from "../components/ui/RadialScoreChart";
import PerformanceLeaders from "../components/ui/PerformanceLeaders";
import RecentActivities from "../components/ui/RecentActivities";
import PerformanceBarChart from "../components/ui/PerformanceBarChart";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={{ width: "100%" }}>
        <TimelineSection />
      </Box>

      <Box sx={{ width: "100%" }}>
        <StatsOverview />
      </Box>

      <Box sx={{ width: "100%" }}>
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
        <Grid size={{ xs: 12, md: 4 }}>
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
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
