import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const fullWidthBox: SxProps<Theme> = {
  width: "100%",
};

const recentActivitiesGrid: SxProps<Theme> = {
  display: "flex",
};

const radialChartWrapper = (height: number | string = "100%"): SxProps<Theme> => ({
  width: "100%",
  height,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default {
  container,
  fullWidthBox,
  recentActivitiesGrid,
  radialChartWrapper,
};
