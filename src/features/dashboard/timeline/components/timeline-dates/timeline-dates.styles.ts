import type { SxProps } from "@mui/material";

const datesGrid = (stepsLength: number): SxProps => ({
  display: "grid",
  gridTemplateColumns: `repeat(${stepsLength}, 1fr)`,
});

const dateText = (isMobile: boolean): SxProps => ({
  textAlign: "center",
  color: "#8597A8",
  fontSize: isMobile ? 8 : 14,
});

export default {
  datesGrid,
  dateText,
};
