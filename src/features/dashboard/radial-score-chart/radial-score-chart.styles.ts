import type { SxProps } from "@mui/material";

const root: SxProps = {
  borderRadius: 4,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #E0E8ED",
};

const title: SxProps = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#1D3557",
  p: 2.5,
};

const contentWrapper: SxProps = {
  flex: 1,
  minHeight: 280,
  display: "flex",
  flexDirection: "column",
};

const chartWrapper: SxProps = {
  flex: 1,
  position: "relative",
};

const centerText: SxProps = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -10%)",
  textAlign: "center",
};

const score: SxProps = {
  fontWeight: 700,
  color: "#1a237e",
};

const subText: SxProps = {
  color: "text.secondary",
};

const statsWrapper: SxProps = {
  display: "flex",
  justifyContent: "space-around",
  borderTop: "1px solid #E0E8ED",
  p: 2,
};

const statItem: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  textAlign: "center",
};

const statValue = (color: string): SxProps => ({
  fontSize: "1.5rem",
  fontWeight: 700,
  color,
});

const statLabel: SxProps = {
  color: "#8597A8",
};

export default {
  root,
  title,
  contentWrapper,
  chartWrapper,
  centerText,
  score,
  subText,
  statsWrapper,
  statItem,
  statValue,
  statLabel,
};
