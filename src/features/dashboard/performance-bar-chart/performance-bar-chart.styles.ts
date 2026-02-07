import type { SxProps } from "@mui/material";

export const paperSx: SxProps = {
  borderRadius: 4,
  height: "100%",
  border: "1px solid #E0E8ED",
};

export const headerSx: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  mb: 3,
};

export const titleSx: SxProps = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#1D3557",
  p: 2.5,
};

export const chartContainerSx: SxProps = {
  width: "100%",
  height: 350,
  px: 2,
  pb: 2,
};

export const tooltipStyle = {
  borderRadius: 12,
  border: "none",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

export const tooltipCursorStyle = {
  fill: "#F5F5F5",
};

export const xAxisTickStyle = {
  fontSize: 13,
  fill: "#9e9e9e",
};
