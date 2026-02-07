import type { SxProps } from "@mui/material";

const evidenceSection: SxProps = {
  display: "flex",
  width: "100%",
  gap: 2,
  "@media (max-width: 900px)": {
    flexDirection: "column",
  },
};

const commentsWrapper: SxProps = {
  flex: 2,
};

const recentActivitiesWrapper: SxProps = {
  flex: 1,
};

export default {
  evidenceSection,
  commentsWrapper,
  recentActivitiesWrapper,
};
